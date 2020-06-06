import React, { useState } from "react";

const Counter = ({ props = {} }) => {
  const initialValue = props.hasOwnProperty("initialValue")
    ? props.initialValue.value
    : 0;

  const interval = props.hasOwnProperty("interval") ? props.interval.value : 0;

  const [count, setCount] = useState(initialValue);

  const add = () => setCount(count + parseInt(interval));
  const subtract = () => setCount(count - parseInt(interval));

  return (
    <div
      style={{
        background: "hsl(200, 50%, 50%)",
        padding: 30,
        color: "#fff",
        margin: "30px 0",
      }}
    >
      <h2>Counter | {interval}</h2>

      <hr />

      <p>Count: [{count}]</p>

      <p>
        <button type="button" className="btn btn-primary" onClick={add}>
          Add
        </button>
      </p>
      <p>
        <button type="button" className="btn btn-primary" onClick={subtract}>
          Subtract
        </button>
      </p>
    </div>
  );
};

export default Counter;

export const schema = {
  name: "Counter",
  props: {
    initialValue: { label: "Initial Value", value: 10 },
    interval: { label: "Interval", value: 1 },
  },
};
