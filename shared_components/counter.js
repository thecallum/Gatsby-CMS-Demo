import React, { useState } from 'react'

const Counter = ({ props = {} }) => {
    const initialValue = props.hasOwnProperty('initialValue') ? props.initialValue.value : 0;

    const [count, setCount] = useState(initialValue);

    const add = () => setCount(count + 1);
    const subtract = () => setCount(count - 1);

    return (
        <div style={{ 
            background: 'hsl(200, 50%, 50%)',
            padding: 30,
            color: '#fff'
         }}>
            <h2>Counter</h2>

            <hr/>

            <p>Count: [{ count }]</p>

            <p><button type='button' className="btn btn-primary" onClick={add}>Add</button></p>
            <p><button type='button' className="btn btn-primary" onClick={subtract}>Subtract</button></p>
        </div>
    )
}

export default Counter;

export const schema = {
    name: 'Counter',
    component: Counter,
    props: {
        initialValue: { label: "Initial Value", value: 10 }
    }
};