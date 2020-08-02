import React, { Component } from 'react'
import meme from '../../img/meme.png'
import './header.css';
export class Header extends Component {
    render() {
        return (
            <header>
                <img src={meme} alt="mem" />
                <h1>Mem Generator</h1>
            </header>
        )
    }
}

export default Header;