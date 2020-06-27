import React, {Component} from 'react'
import {  BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import CSGO from './pages/CSGO'
import PUBG from './pages/PUBG'
import Blog from './pages/Blog'
import BlogCsgo from './blog/blog_csgo'
import BlogPubg from './blog/blog_pubg'
import './css/style.css'



class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
		 				<Route path="/best-games" exact component={Games} />
						<Route path="/blog" exact component={Blog} />
						<Route path="/best-games/:game"   
								render = {
                                    ( {history,match} ) => {
                                        const { game } = match.params;

                                        if (game === "csgo") {
                                            return  <CSGO history={history} csgo = { game } />
										}
										if (game === "pubg") {
                                            return  <PUBG history={history} pubg = { game } />
                                        }

                                    }
                                } />
						<Route path="/blog/:game"   
								render = {
                                    ( {history,match} ) => {
                                        const { game } = match.params;

                                        if (game === "csgo") {
                                            return  <BlogCsgo history={history} csgo = { game } />
										}
										if (game === "pubg") {
                                            return  <BlogPubg history={history} pubg = { game } />
                                        }

                                    }
                                } />
					</Switch>
				</Router>	
			</div>
		)
	}
}

export default App