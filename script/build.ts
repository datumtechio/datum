import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile, cp, readdirSync } from "fs/promises";
import { readdir } from "fs/promises";
import { join } from "path";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function getCSSHash() {
  try {
    const assetsDir = "dist/public/assets";
    const files = await readdir(assetsDir);
    const cssFile = files.find(f => f.startsWith("index-") && f.endsWith(".css"));
    if (cssFile) {
      return `/assets/${cssFile}`;
    }
  } catch (e) {
    console.log("Could not find CSS file, will update manually if needed");
  }
  return null;
}

async function updateHTMLCSSLinks(cssPath: string) {
  const htmlFiles = ["dist/public/web-dev.html", "dist/public/digital-marketing.html", "dist/public/app-dev.html"];
  
  for (const filePath of htmlFiles) {
    try {
      let content = await readFile(filePath, "utf-8");
      // Replace HASH placeholder with actual CSS path
      content = content.replace(
        /\/assets\/index-HASH\.css/g,
        cssPath
      );
      await writeFile(filePath, content, "utf-8");
      console.log(`Updated CSS link in ${filePath}`);
    } catch (e) {
      console.log(`Could not update ${filePath}:`, e);
    }
  }
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // Get the CSS hash from the built files
  const cssPath = await getCSSHash();
  
  // Copy public HTML files to dist
  console.log("copying public HTML files...");
  await cp("client/public", "dist/public", { recursive: true });

  // Update CSS links in HTML files
  if (cssPath) {
    console.log(`updating CSS links with hash: ${cssPath}`);
    await updateHTMLCSSLinks(cssPath);
  }

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
