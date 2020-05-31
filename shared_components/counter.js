import React, { useState } from 'react'

export default () => {
    const [count, setCount] = useState(0);

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

            <p><button className="btn btn-primary" onClick={add}>Add</button></p>
            <p><button className="btn btn-primary" onClick={subtract}>Subtract</button></p>
        </div>
    )


}