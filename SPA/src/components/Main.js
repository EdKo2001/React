import React from 'react'
import { Link } from 'react-router-dom'
import '.././css/style.css'

function Main(props) {
    return (
        <section className="main">
            <div className="container">      
                <div className="items">
                    <div className="item">
                        <Link to={props.url1}>
                            <img src={props.image1} alt="" className="item__img" />
                            <h3>{props.text1}</h3>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to={props.url2}>
                            <img src={props.image2} alt="" className="item__img" />
                            <h3>{props.text2}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
