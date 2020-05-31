import React from 'react'

export default ({ pageContext }) => {
    // console.log({ props })

    return (
        <div style={{
            margin: '60px auto',
            padding: '30px'
        }}>
            <h1>{ pageContext.name }</h1>


            <p style={{ whiteSpace: 'pre-wrap' }}>{ pageContext.content }</p>
        </div>
    )
}