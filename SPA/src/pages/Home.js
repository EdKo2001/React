import React, { Component } from 'react'
import Nav from '.././components/Navigation'
import Main from '.././components/Main'
import '.././css/style.css'
import img1 from '.././img/games.jfif'
import img2 from '.././img/blog.jpg'

class Home extends Component {
    render() {
        return (
            <>
                <Nav title="Homepage"/>
                <Main url1={'/best-games'} url2={'/blog'} image1={img1} image2={img2} text1={'Best Games'} text2={'Blog'}/>
            </>
        )
    }
}

export default Home
