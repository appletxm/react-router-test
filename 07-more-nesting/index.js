import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo';
import Home from './modules/Home';
import SubHome from './modules/SubHome';

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/repos" component={Repos}>
				<IndexRoute component={SubHome} />
				<Route path="/repos/:userName/:repoName" component={Repo}/>
			</Route>
			<Route path="/about" component={About}/>
		</Route>
	</Router>
), document.getElementById('app'))
