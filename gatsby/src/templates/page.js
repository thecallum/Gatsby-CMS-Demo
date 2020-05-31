import React from 'react'
import Counter from '@components/counter'

export default ({ pageContext }) => {
    // console.log({ props })

    return (
        <div style={{
            margin: '60px auto',
            padding: '30px'
        }}>
            <h1>{ pageContext.name }</h1>


            <p style={{ whiteSpace: 'pre-wrap' }}>{ pageContext.content }</p>


            <Counter />
        </div>
    )
}