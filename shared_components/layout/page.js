import React from "react";
import styled from "styled-components";

import Layout from "./components/layout";

export default ({ children, isServer = true }) => {
  return (
    <Layout hideHeader={isServer}>
      <>{children}</>
    </Layout>
  );
};
