import React from "react";
import Layout from "./components/layout";

import Components from "@components";

export default ({ children, isServer = false, pageContext }) => {
  return (
    <Layout hideHeader={isServer}>
      {isServer ? (
        <>{children}</>
      ) : (
        <>
          {pageContext.jsonContent.map((component, index) => {
            const Component = Components[component.name];

            return (
              <Component props={component.props} state={component.state} />
            );
          })}
        </>
      )}
    </Layout>
  );
};
