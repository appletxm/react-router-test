import React from 'react';
import {hashHistory} from 'react-router';
import NavLink from './NavLink';
import SubChild from './SubChild';

export default class App extends React.Component{

  constructor(props, context){
    super(props, context);
  }

  sendParamToAbout(){
    // let nextLocation = history.createLocation({
    //   pathName: '/about',
    //   query: {
    //     name: 'txm',
    //     time: new Date().toString()
    //   }
    // });

    // hashHistory.push({
    //   path: '/about',
    //   query: {
    //     name: 'txm',
    //     time: new Date().toString()
    //   }
    // });


    // console.info(this.props.location)
  }

  sendParamToRepo(){
    // let history = this.props.history;
    // history.push({pathname: '/repos', state: {user: 'ftt', id: '009'}})

    //this.context.router.push({pathname: '/repos', state: {user: 'ftt', id: '009'}});

    hashHistory.push({pathname: '/repos', query: {user: 'ftt', id: '009'}});
  }

  getChildContext(){
    return {color: 'red'};
  }

  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to={{pathname: '/about', query: {name: 'txm', id: '008'}}}>About<i>1111</i></NavLink></li>
          <li onClick={this.sendParamToRepo.bind(this)}>click me</li>
          <li>
            <NavLink to="/repos?user=ftt" onClick={this.sendParamToRepo.bind(this)}>
              Repos
              <i>22222</i>
              <i>44444</i>
              <SubChild ok="123456"><b>888</b></SubChild>
            </NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
};

 App.contextTypes = {
    router: Object
  };
  App.childContextTypes = {
    color: React.PropTypes.string
  }