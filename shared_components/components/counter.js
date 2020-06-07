import React, { useState } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  background: hsl(200, 50%, 50%);
  padding: 30px;
  color: #fff;
  margin: 30px 0;

  .counter-container {
    > button:first-child {
      margin-right: 15px;
    }
  }
`;

const Counter = ({ props = {} }) => {
  const initialValue = props.hasOwnProperty("initialValue")
    ? props.initialValue.value
    : 0;

  const interval = props.hasOwnProperty("interval") ? props.interval.value : 0;

  const [count, setCount] = useState(initialValue);

  const add = () => setCount(count + parseInt(interval));
  const subtract = () => setCount(count - parseInt(interval));

  return (
    <StyledCounter>
      <h2>Counter {count}</h2>

      <div className="counter-container">
        <button type="button" className="btn btn-primary" onClick={subtract}>
          Subtract
        </button>

        <button type="button" className="btn btn-primary" onClick={add}>
          Add
        </button>
      </div>
    </StyledCounter>
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
