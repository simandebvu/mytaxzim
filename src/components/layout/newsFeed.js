import React, { Component } from 'react'

const feedStyle = {
    margin: '10px',
    padding: '15px'
}

export class newsFeed extends Component {
    render() {
        return (
            <p style={feedStyle}>
                <h1>Here is the latest news</h1>
            </p>
        )
    }
}

export default newsFeed
