import { Flex } from "@dynatrace/strato-components-preview";
import React from "react";
import EditorOne from "../Components/EditorOne";
import type { AppCompProps } from "../interfaces/Interface";
import EditorTwo from "../Components/EditorTwo";
import TestEditor from "../Components/TestEditor";
import MyWebComponent from "../Components/MyWebComponent";
import As from "../Components/As";

const Home: React.FC<AppCompProps> = () => {
  return (
    <Flex>
      <EditorOne />
      {/* <EditorTwo /> */}
      {/* <MyWebComponent /> */}
      {/* <As /> */}
      {/* <TestEditor /> */}
    </Flex>
  );
};

export default Home;
