import { Skeleton } from "@dynatrace/strato-components-preview";
import { Editor } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";
import React from "react";
import type { AppCompProps } from "../interfaces/Interface";

const EditorOne: React.FC<AppCompProps> = () => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="json"
      defaultValue="{}"
      theme="vs-dark"
      loading={<Skeleton />}
      // options={{
      //   formatOnType: true,
      //   formatOnPaste: true,
      //   wordWrap: "on",
      // }}
      onValidate={(markers) => console.log(markers)}
    />
  );
};

export default EditorOne;
