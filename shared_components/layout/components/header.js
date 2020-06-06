import React from "react";
// import { Link } from "gatsby";

// import Link from "link";

export default () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Pages", path: "#" },
  ];

  return (
    <header className="header">
      <ul>
        {links.map((link, index) => (
          <li key={index}>{/* <Link to={link.path}>{link.name}</Link> */}</li>
        ))}
      </ul>
    </header>
  );
};
