import React, { Component } from 'react'
import './main.css'
import meme1 from '../../img/meme1.jpg'
import meme2 from '../../img/meme2.jpg'
import meme3 from '../../img/meme3.jpg'
import meme4 from '../../img/meme4.jpg'
import meme5 from '../../img/meme5.jpg'
import meme6 from '../../img/meme6.jpg'
import meme7 from '../../img/meme7.jpg'
import meme8 from '../../img/meme8.jpg'
import meme9 from '../../img/meme9.jpg'
import meme10 from '../../img/meme10.jpg'
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver';

export class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topText: '',
            bottomText: '',
            randomImg: meme1,
            allMemeImg: [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10]
        }
    }
    submitHandle = (e) => {
        e.preventDefault()
        const randNum = Math.ceil(Math.random() * this.state.allMemeImg.length)
        if (randNum <= this.state.allMemeImg.length) {
            const randNum = Math.ceil(Math.random() * this.state.allMemeImg.length)
            if (randNum >= this.state.allMemeImg.length) {
                const randNum = Math.ceil(Math.random() * this.state.allMemeImg.length)
                const randMemeImg = this.state.allMemeImg[randNum]
                this.setState({ randomImg: [randMemeImg] })
            } else {
                const randMemeImg = this.state.allMemeImg[randNum]
                this.setState({ randomImg: [randMemeImg] })
            }
        }
    }

    changeHandle = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    download = () => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            saveAs(canvas.toDataURL(), 'meme.png');
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <input type="text" name="topText" placeholder="The Top Text" onChange={this.changeHandle} />
                    <input type="text" name="bottomText" placeholder="The Bottom Text" onChange={this.changeHandle} />
                    <button>Generate</button>
                </form>
                <div className="main" id="capture">
                    <img src={this.state.randomImg} alt="mem" />
                    <h1 className="topText">{this.state.topText}</h1>
                    <h1 className="bottomText">{this.state.bottomText}</h1>
                </div>
                <button onClick={this.download} className="download">Download</button>
            </div>
        )
    }
}

export default Main