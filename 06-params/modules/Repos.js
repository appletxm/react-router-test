import React from 'react';
import Button from './Button';

export default class Repos extends React.Component{
	constructor(props, context){
		super(props, context);
	}

	componentDidMount(){
		console.log('----repos----');
		console.info(this.props.location.query);
	}

	componentWillReceiveProps(){
		console.log('---3');
	}

  render() {
    return <div>Repos <Button>Click Me</Button></div>
  }
}

Repos.contextTypes = {
  router: Object
}
