import React from "react";
import components from "@components";

// import Layout from "../../gatsby/src/components/layout";
// import Layout from '@layout/page'
import Layout from "./components/layout";

const PageContent = ({ jsonContent }) => (
  <>
    {jsonContent.map((component, index) => {
      const Component = components[component.name];
      const value = component.hasOwnProperty("value")
        ? component.value.value
        : null;

      return <Component key={index} props={component.props} value={value} />;
    })}
  </>
);

export default ({ pageContext }) => {
  console.log({ pageContext });

  return (
    <Layout hideHeader={true}>
      <PageContent jsonContent={pageContext.jsonContent} />
    </Layout>
  );
};
