import React, { Component } from 'react'
import Nav from '.././components/Navigation'
import SP from '.././components/SinglePage'
import img from '.././img/img2.jpg'

class Blog_csgo extends Component {
    render() {
        return (
            <>
                <Nav title="PUBG"/>
                <SP url="/best-games" img={img} text="PlayerUnknown's Battlegrounds" />
            </>
        )
    }
}

export default Blog_csgo