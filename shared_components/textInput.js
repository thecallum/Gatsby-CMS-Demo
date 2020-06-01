import React from "react";

const TextInput = ({ props = {}, updateValue, index, value }) => {
  const rows = props.hasOwnProperty("rows") ? props.rows.value : 1;

  return (
    <div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          className="form-control"
          id="content_input"
          rows={rows}
          name="content"
          value={value}
          onChange={(e) => updateValue(index, e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TextInput;

export const schema = {
  name: "TextInput",
  value: {
    value: "Default value",
  },
  props: {
    rows: {
      label: "Rows",
      value: 8,
    },
  },
};
