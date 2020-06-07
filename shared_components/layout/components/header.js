import React from "react";

export default ({ Link }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Pages", path: "#" },
  ];

  return (
    <header className="header">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
