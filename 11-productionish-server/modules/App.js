import React from 'react'
import {browserHistory} from 'react-router';
import NavLink from './NavLink'

class App extends React.Component{
  constructor(props){
    super(props);
  }

  sendParamsToAbout(){
      browserHistory.push({pathname: '/about', query:{user:'txm', number: '0009'}});
  }

render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li onClick={this.sendParamsToAbout.bind(this)}>send params to about</li>
          <li><NavLink to={{pathname: '/about', query:{user:'txm', number: '0009'}}}>About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}

export default App;