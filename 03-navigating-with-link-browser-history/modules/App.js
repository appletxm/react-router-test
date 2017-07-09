import React from 'react';
import {Link} from 'react-router';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        Hello, React Router! <br/>
        <Link to="/repos">Repos</Link> <br/>
        <Link to="/about">About</Link> <br/>
        <Link to="/">Home</Link>
        <div className="content">
          {this.props.children}
        </div>
      </div>    
  );
  } 
}

export default App;
