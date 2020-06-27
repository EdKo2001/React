import React, { Component } from 'react'
import Nav from '.././components/Navigation'
import SP from '.././components/SinglePage'
import img from '.././img/img1.jpg'

class CSGO extends Component {
    render() {
        return (
            <>
                <Nav title="CSGO"/>
                <SP url="/best-games" img={img} text="Counter-Strike: Global Offensive" />
            </>
        )
    }
}

export default CSGO