import React from "react";
import components from "@components";
import "../../gatsby/src/scss/main.scss";

// import Layout from "../../gatsby/src/components/layout";
// import Layout from '@layout/page'
import Layout from "./components/layout";

const PageContent = ({ jsonContent }) => (
  <>
    {jsonContent.map((component, index) => {
      const Component = components[component.name];
      const state = component.hasOwnProperty("state") ? component.state : null;

      return <Component key={index} props={component.props} state={state} />;
    })}
  </>
);

export default ({ pageContext }) => {
  console.log({ pageContext });

  return (
    <Layout hideHeader={true}>
      <PageContent jsonContent={JSON.parse(pageContext.jsonContent)} />
    </Layout>
  );
};
