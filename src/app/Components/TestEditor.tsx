import React from "react";
import * as monaco from "monaco-editor";
import { editor, MarkerSeverity, Uri } from "monaco-editor";
import { configureMonacoYaml, type SchemasSettings } from "monaco-yaml";
import EditorOne from "./EditorOne";
import { CodeEditor, Flex } from "@dynatrace/strato-components-preview";

const TestEditor: React.FC<{}> = () => {
  //   const ele = React.createElement("h1", { className: "greeting" }, "Hello");

  //   const AA = editor.create(document.createElement("div"), {});
  // console.log(process);
  return (
    <Flex height={"100%"} width={900}>
      <CodeEditor language="yaml" value="aws:" fullHeight spellCheck />
    </Flex>
  );
};

export default TestEditor;
