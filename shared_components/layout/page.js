import React from "react";
import Layout from "./components/layout";
import RenderContent from "../../gatsby/src/components/renderContent";

export default ({ children, isServer = false, pageContext }) => {
  return (
    <Layout hideHeader={isServer}>
      {isServer ? (
        <>{children}</>
      ) : (
        <RenderContent jsonContent={pageContext.jsonContent} />
      )}
    </Layout>
  );
};
