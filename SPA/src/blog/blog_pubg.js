import React, { Component } from 'react'
import Nav from '../components/Navigation'
import SP from '../components/SinglePage'
import img from '.././img/img2.jpg'

class BlogPubg extends Component {
    render() {
        return (
            <>
                <Nav title="PUBG"/>
                <SP url="/blog" img={img} text="PlayerUnknown's Battlegrounds" />
            </>
        )
    }
}

export default BlogPubg