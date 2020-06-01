import React from "react";

export default ({ error }) => (
    <>{!!error && <p style={{ color: "red" }}>{error}</p>}</>
);
