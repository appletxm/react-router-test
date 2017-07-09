import React from 'react';  
import { Link } from 'react-router';   
import Menu from './Menu';  
  
  
const App = class extends React.Component {  
    constructor(props) {  
        super(props);  
    }  
    render() {  
        return (  
            <div>  
                <nav>  
                    <h3>总菜单</h3>  
                    <Menu/>  
                </nav>  
                {this.props.children}  
            </div>  
        )  
    }  
}  
  
  
export default App; 