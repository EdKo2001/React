import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '.././css/style.css'
import { FaHome } from "react-icons/fa";
import { slide as Menu } from 'react-burger-menu'

class Nav extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
        return (
            <header className="header">
                <div className="container">
                    <nav>
                        <h3>{this.props.title}</h3>
                        <ul className="nav-links">
                            <NavLink  exact to="/">
                                <li><FaHome /> Home</li>
                            </NavLink>
                            <NavLink exact to="/best-games">
                                <li>Best Games</li>
                            </NavLink>
                            <NavLink exact to="/blog">
                                <li>Blog</li>
                            </NavLink>
                        </ul>
                    <Menu right width={ '60%' }>
                            <NavLink  exact to="/">
                                <li className="home"><FaHome /> Home</li>
                            </NavLink>
                            <NavLink exact to="/best-games">
                                <li>Best Games</li>
                            </NavLink>
                            <NavLink exact to="/blog">
                                <li>Blog</li>
                            </NavLink>
                        </Menu>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Nav
