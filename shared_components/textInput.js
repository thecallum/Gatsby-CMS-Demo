import React from "react";

const TextInput = ({ props = {}, updateValue, index }) => {
  const content = props.hasOwnProperty("content") ? props.content.value : "";

  //   console.log({ props });

  return (
    <div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          className="form-control"
          id="content_input"
          rows="8"
          name="content"
          value={content}
          onChange={(e) => updateValue(index, "content", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TextInput;

export const schema = {
  name: "Text Input",
  component: TextInput,
  props: {
    content: {
      label: "Content",
      value: "Some text content",
    },
  },
};
