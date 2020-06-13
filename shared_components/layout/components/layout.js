import React from "react";
import Header from "./header";
import styled from "styled-components";

const Layout = styled.div`
  min-height: 100vh;
  // padding: 30px;
  width: 100%;

  .layout-main {
    padding: 30px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    min-height: calc(100vh - 60px);
    background: #fff;
  }
`;

export default ({ children, hideHeader }) => {
  return (
    <Layout
      style={{
        padding: hideHeader ? "30px" : 0,
      }}
    >
      {hideHeader !== true && <Header />}

      <main className="layout-main">
        <>{children}</>
      </main>
    </Layout>
  );
};
