import React from "react";
import styled from "styled-components";

import ENVIRONMENT from "ENVIRONMENT";

const Header = styled.header`
  background: hsl(0, 50%, 50%);
  height: 60px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    height: 100%;
    align-items: center;
  }

  li {
    display: block;
    margin: 0 0 0 15px;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const IS_SERVER = ENVIRONMENT.IS_SERVER;

const { Link } = require(IS_SERVER ? "./fakeLink" : "gatsby");

const links = [
  { name: "Home", path: "/" },
  { name: "Pages", path: "#" },
];

export default () => (
  <Header>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </Header>
);
