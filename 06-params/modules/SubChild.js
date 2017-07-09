import React from 'react';

class SubChild extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (<div {...this.props}>99999999{this.props.children}</div>);
	}

}

export default SubChild;