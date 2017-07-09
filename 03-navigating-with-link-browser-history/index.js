import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home';

const routes = (
	<Route>
	<Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="/repos" component={Repos} />
  	<Route path="/about" component={About}/>
  	</Route>
);
const router = (
	<Router routes={routes} history={browserHistory}></Router> 
);

render(router, document.getElementById('app'))

//render((<div><App /><Home /><About /><Repos /></div>), document.getElementById('app'));
