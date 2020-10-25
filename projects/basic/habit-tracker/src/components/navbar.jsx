import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <i className="fas fa-leaf navbar-logo"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        )
    }
}
