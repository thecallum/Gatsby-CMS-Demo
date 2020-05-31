import React from 'react'
import Markdown from 'markdown-to-jsx';
import components from '@components'
import { Link } from 'gatsby'

export default ({ pageContext }) => {
    return (
        <div style={{
            margin: '60px auto',
            padding: '30px'
        }}>
            <p><Link to='/'>Home</Link></p>

            <h1>{ pageContext.name }</h1>

            <Markdown
                options={{
                    overrides: { ...components }
                }}
            >
                { pageContext.content }
            </Markdown>
        </div>
    )
}