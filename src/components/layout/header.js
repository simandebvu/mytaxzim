import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '5px'
};
const headerStyle = {
    fontFamily: 'Quicksand, sans-serif',
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export class header extends Component {

    render() {

        return (
            <header style={headerStyle}>
                <h1>Zimbabwe Money v1.0.0</h1>
                <Link style={linkStyle} to="/">Home</Link>  |
                <Link style={linkStyle} to="/tax">Tax Checker</Link> |
                <Link style={linkStyle} to="/rate">Rate</Link> |
                <Link style={linkStyle} to="/price">Price Check</Link> |
                <Link style={linkStyle} to="/fuel">Fuel Check</Link> |
                <Link style={linkStyle} to="/about">About</Link>
            </header>
        )
    }
}

export default header