// src/App.js
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "../styles/App.css";

const files = {
  "18-Functions": `function example() { console.log("Functions example"); }`,
  "19-geoLocation": `navigator.geolocation.getCurrentPosition(position => console.log(position));`,
  // Add other files here
};

function As() {
  const [code, setCode] = useState("// Select a file from the sidebar");

  const handleFileClick = (fileName) => {
    if (files[fileName]) {
      setCode(files[fileName]);
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          {Object.keys(files).map((fileName) => (
            <li key={fileName} onClick={() => handleFileClick(fileName)}>
              {fileName}
            </li>
          ))}
        </ul>
      </div>
      <div className="editor-container">
        <Editor
          height="100vh"
          defaultLanguage="javascript"
          defaultValue={code}
          value={code}
          onChange={(value) => setCode(value!)}
          theme="vs-dark"
        />
      </div>
    </div>
  );
}

export default As;
