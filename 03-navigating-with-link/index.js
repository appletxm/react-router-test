import React from 'react'
import { render } from 'react-dom'
//import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home} />
    	<Route path="repos" component={Repos}/>
    	<Route path="about" component={About}/>
    </Route>
    
  </Router>
), document.getElementById('app'));



// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home}/>
//       <Route path="/repos" component={Repos}>
//       </Route>
//       <Route path="/about" component={About}/>
//     </Route>
//   </Router>
// ), document.getElementById('app'))

//render((<div><App /><Home /><About /><Repos /></div>), document.getElementById('app'));
