import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const TextInput = ({
  props = {},
  updateState,
  index,
  state,
  editContent = false,
}) => {
  return (
    <div>
      {editContent ? (
        <div className="form-group">
          <TextareaAutosize
            className="form-control"
            value={state.content || ""}
            onChange={(e) => updateState(index, "content", e.target.value)}
            style={{
              padding: 0,
              border: "none",
              resize: "none",
              overflow: "hidden",
            }}
          />
        </div>
      ) : (
        <p style={{ whiteSpace: "pre-wrap" }}>{state.content}</p>
      )}
    </div>
  );
};

export default TextInput;

export const schema = {
  name: "TextInput",
  // value: {
  //   content: "Default value",
  // },
  state: {
    content: "Default value",
  },
  props: {
    rows: {
      label: "Rows",
      value: 8,
    },
  },
};
