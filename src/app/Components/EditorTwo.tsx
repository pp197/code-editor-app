import React, { useEffect } from "react";
import type { AppCompProps } from "../interfaces/Interface";
import MonacoReactEditor, { useMonaco } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { configureMonacoYaml } from "monaco-yaml";
import { Skeleton } from "@dynatrace/strato-components-preview";

// loader.config({ monaco, "vs/nls": { availableLanguages: {} } });

window.MonacoEnvironment = {
  getWorker(moduleId: unknown, label: string) {
    switch (label) {
      case "editorWorkerService":
        return new Worker(
          new URL("monaco-editor/esm/vs/editor/editor.worker", import.meta.url)
        );
      case "css":
      case "less":
      case "scss":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/css/css.worker",
            import.meta.url
          )
        );
      case "handlebars":
      case "html":
      case "razor":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/html/html.worker",
            import.meta.url
          )
        );
      case "json":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/json/json.worker",
            import.meta.url
          )
        );
      case "javascript":
      case "typescript":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/typescript/ts.worker",
            import.meta.url
          )
        );
      case "yaml":
        return new Worker(new URL("monaco-yaml/yaml.worker", import.meta.url));
      default:
        throw new Error(`Unknown label ${label}`);
    }
  },
};

const EditorTwo: React.FC<AppCompProps> = () => {
  const handleOnChange = (value: string | undefined) => {
    console.log(value);
  };

  const handleEditorValidation = (markers: monaco.editor.IMarker[]) => {
    // model markers
    markers.forEach((marker) =>
      console.error("onValidate:", marker.severity, marker.message)
    );
  };

  useEffect(() => {
    configureMonacoYaml(monaco, {
      // Have to set an empty Diagnostics options to get syntax checking
      validate: true,
      enableSchemaRequest: true,
      hover: true,
      completion: true,
    });
  }, []);

  return (
    <>
      <MonacoReactEditor
        options={{
          readOnly: false,
          lineDecorationsWidth: 6,
          lineNumbersMinChars: 0,
          glyphMargin: false,
          folding: false,
          lineNumbers: "off",
          minimap: {
            enabled: false,
          },
          fontSize: 18,
        }}
        loading={
          <>
            <Skeleton />
          </>
        }
        language={"yaml"}
        width={"100%"}
        height={"500px"}
        value={"test:"}
        onValidate={handleEditorValidation}
        onChange={handleOnChange}
        theme="vs-dark"
      />
    </>
  );
};

export default EditorTwo;
