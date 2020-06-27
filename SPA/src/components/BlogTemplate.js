import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import '.././css/style.css'
import Item from ".././components/Item";

function BlogTemplate(props) {
    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 800, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 2, itemsToScroll: 2 }
      ];
    return (
        <section className="main__blog">
            <div className="container">
                <div className="items">
                    <Carousel breakPoints={breakPoints}>
                        <Item>
                            <div className="item">
                                <Link to={props.url1}>
                                    <img src={props.image1} alt="" className="item__img" />
                                    <h3>{props.text1}</h3>
                                </Link>
                            </div>
                        </Item>
                        <Item>
                            <div className="item">
                                <Link to={props.url2}>
                                    <img src={props.image2} alt="" className="item__img" />
                                    <h3>{props.text2}</h3>
                                </Link>
                            </div>
                        </Item>
                        <Item>
                            <div className="item">
                                <Link to={props.url2}>
                                    <img src={props.image2} alt="" className="item__img" />
                                    <h3>{props.text2}</h3>
                                </Link>
                            </div>
                        </Item>
                        <Item>
                            <div className="item">
                                <Link to={props.url1}>
                                    <img src={props.image1} alt="" className="item__img" />
                                    <h3>{props.text1}</h3>
                                </Link>
                            </div>
                        </Item>
                        <Item>
                            <div className="item">
                                <Link to={props.url1}>
                                    <img src={props.image1} alt="" className="item__img" />
                                    <h3>{props.text1}</h3>
                                </Link>
                            </div>
                        </Item>
                        <Item>
                            <div className="item">
                                <Link to={props.url2}>
                                    <img src={props.image2} alt="" className="item__img" />
                                    <h3>{props.text2}</h3>
                                </Link>
                            </div>
                        </Item>
                    </Carousel>        
                </div>
            </div>
        </section>
        
    )
}

export default BlogTemplate
