import React, { PureComponent } from 'react'

export default class Navbar extends PureComponent {
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
