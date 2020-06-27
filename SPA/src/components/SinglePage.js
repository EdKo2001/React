import React from 'react'
import { Link } from 'react-router-dom'
import '.././css/style.css'

function SinglePage(props) {
    return (
        <section className="single-page">
            <div className="container">
                <Link to={props.url} className="back">
                    <span>Back</span>
                </Link>
                <img src={props.img} alt="" />
                <h3>{props.text}</h3>
            </div>
        </section>
    )
}

export default SinglePage
