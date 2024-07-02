import { Heading, Page } from "@dynatrace/strato-components-preview";
import React from "react";
import Home from "./pages/Home";
import type { AppCompProps } from "./interfaces/Interface";

export const App: React.FC<AppCompProps> = () => {
  return (
    <Page>
      <Page.Header>
        <Heading as="h4" level={4}>
          Yaml Code Editor
        </Heading>
      </Page.Header>
      <Page.Main>
        <Home />
      </Page.Main>
    </Page>
  );
};
