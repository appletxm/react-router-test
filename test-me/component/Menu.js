import React from 'react';  
import { Link,  IndexLink} from 'react-router';  
  
class Menu extends React.Component {  
    constructor(props) {  
        super(props);  
    }  
    render() {  
        return (  
            <div>  
                <ul>   
                    <li><Link to="/text1" activeClass="actived">text1</Link></li>  
                    <li><Link to="/text2">text2</Link></li>  
                    <li><IndexLink to="/">Home</IndexLink></li>
                </ul>  
            </div>  
        )  
    }  
}   
  
export default Menu; 