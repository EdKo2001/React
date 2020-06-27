import React, { Component } from 'react'
import Nav from '.././components/Navigation'
import BlogT from '.././components/BlogTemplate'
import '.././css/style.css'
import img1 from '.././img/img1.jpg'
import img2 from '.././img/img2.jpg'

class Blog extends Component {
    render() {
        return (
            <>
                <Nav title="Blog"/>
                <BlogT url1={'/blog/csgo'} url2={'/blog/pubg'} image1={img1} image2={img2} text1={'CSGO'} text2={'PUBG'}/>
            </>
        )
    }
}

export default Blog
