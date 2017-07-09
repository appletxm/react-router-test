import React from 'react'

export default class Button extends React.Component{
	constructor(props, context){
		super(props, context);
	}

	componentDidMount(){
		//console.log('----repos----');
		//console.info(this.props.location.query);
	}

	componentWillReceiveProps(){
		console.log('---3');
	}

  render() {
    return <button style={{color: this.context.color}}>{this.props.children} button</button>
  }
}

Button.contextTypes = {
	color: React.PropTypes.string
};
