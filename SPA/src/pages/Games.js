import React, { Component } from 'react'
import Nav from '.././components/Navigation'
import Main from '.././components/Main'
import '.././css/style.css'
import img1 from '.././img/img1.jpg'
import img2 from '.././img/img2.jpg'
class Home extends Component {
    render() {
        return (
            <>
                <Nav title="Best Games"/>
                <Main url1="/best-games/csgo" url2="/best-games/pubg" image1={img1} image2={img2} text1="Counter-Strike: Global Offensive" text2="PlayerUnknown's Battlegrounds" />
            </>
        )
    }
}

export default Home
