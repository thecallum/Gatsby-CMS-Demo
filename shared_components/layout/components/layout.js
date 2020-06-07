import React from "react";
import Header from "./header";
// import "../scss/main.scss"

import styled from "styled-components";

const Layout = styled.div`
  min-height: 100vh;
  padding: 30px;
  width: 100%;

  .layout-main {
    padding: 30px;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    min-height: calc(100vh - 60px);
    background: #fff;
  }

  // .header {
  //   background: hsl(0, 50%, 50%);
  //   height: 60px;

  //   ul {
  //     display: flex;
  //     margin: 0;
  //     padding: 0;
  //     height: 100%;
  //     align-items: center;
  //   }

  //   li {
  //     display: block;
  //     margin: 0 0 0 15px;

  //     a {
  //       color: #fff;
  //       text-decoration: none;

  //       &:hover {
  //         text-decoration: underline;
  //       }
  //     }
  //   }
  // }
`;

export default ({ children, hideHeader, Link }) => (
  <Layout>
    {hideHeader !== true && <Header Link={Link} />}

    <main className="layout-main">
      <>{children}</>
    </main>
  </Layout>
);
