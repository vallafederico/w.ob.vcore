import { serve, build } from "esbuild";
import { glsl } from "esbuild-plugin-glsl-include";
// import fse from "fs-extra";

/* - Setup */
const env = process.env.NODE_ENV;
const production = env === "production";

const FILES = {
  entry: ["src/app.js"],
  out: "build/js",
};

const SETTINGS = {
  bundle: true,
  sourcemap: !production,
  loader: { ".png": "dataurl", ".webp": "dataurl", ".glb": "dataurl" },
};

/* -- Plugins */
const PLUGINS = [
  glsl({
    minify: production,
  }),
];

/* --- DEVELOPMENT */
function serveDev() {
  serve(
    {
      port: 8000,
      servedir: "dist",
    },
    {
      entryPoints: FILES.entry,
      outdir: "dist",
      ...SETTINGS,
      plugins: PLUGINS,
    }
  ).then((server) => {
    console.log(`↑DEV ↑`);
    //   server.stop();
  });
}

/* --- DEVELOPMENT */
function serveFile() {
  serve(
    {
      port: 8000,
    },
    {
      entryPoints: FILES.entry,
      outfile: "dev.js",
      ...SETTINGS,
      plugins: PLUGINS,
    }
  ).then((server) => {
    console.log("http://localhost:8000/dev.js");
    console.log("https://webflow.com/design/vcore");
    console.log("https://vcore.webflow.io/");
    console.log("https://codesandbox.io/s/vcore-starter-nont6c");
    //   server.stop();
  });
}

/* --- BUILD */
function buildJs() {
  build({
    entryPoints: FILES.entry,
    outdir: FILES.out,
    ...SETTINGS,
    plugins: PLUGINS,
  }).then((stats) => {
    console.log(stats);
  });
}

// // COPY FILES
// try {
//   fse.copySync("src/assets", "dist/assets", { overwrite: true });
//   console.log("success!");
// } catch (err) {
//   console.error(err);
// }

/* ------ Run! */
if (production) {
  buildJs();
} else if (env === "flow") {
  serveFile();
} else {
  serveDev();
}
