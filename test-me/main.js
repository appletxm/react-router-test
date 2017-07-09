import React from 'react'; 
import {render} from 'react-dom';   
import { Router, Route, Redirect, IndexRoute } from 'react-router';  
import { browserHistory } from 'react-router' ;
import { Link } from 'react-router';  

  
import App from './component/App';  
import Text1 from './component/Text1';  
import Text2 from './component/Text2';  

const routes = (
	<Route>
		<Route path="/" component={App}>  
		    <IndexRoute component={Text1}/>  
		</Route> 
		<Route path="/text1" component={Text1}/>  
	    <Route path="/text2" component={Text2}/>
    </Route>  
);
const router = (
	<Router routes={routes} history={browserHistory}></Router> 
);
  
render(router, document.getElementById('react-content')); 