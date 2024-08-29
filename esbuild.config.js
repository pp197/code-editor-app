const { build } = require("esbuild");

void build({
  entryPoints: ["./node_modules/monaco-editor/esm/vs/editor/editor.worker.js"],
  bundle: true,
  format: "iife",
  outfile: `./src/assets/editorWorker.js`,
});

void build({
  entryPoints: [
    "./node_modules/monaco-editor/esm/vs/language/json/json.worker.js",
  ],
  bundle: true,
  format: "iife",
  outfile: `./src/assets/jsonWorker.js`,
});

void build({
  entryPoints: ["./node_modules/monaco-yaml/yaml.worker.js"],
  bundle: true,
  format: "iife",
  outfile: `./src/assets/yamlWorker.js`,
});
