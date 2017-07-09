import React from 'react';
import {hashHistory} from 'react-router';

export default class extends React.Component{

	componentWillMount(){
		console.log('--------');
		console.info(this.props.params, this.props.location.query);
	}

	componentDidMount(){
		console.log('---2');
	}

	componentWillReceiveProps(){
		console.log('---3');
	}

	shouldComponentUpdate(){
		console.log('---4');
		return true;
	}

	componentWillUpdate(){
		console.log('---5');
	}

	componentDidUpdate(){
		console.log('---6');
	}

	componentWillUnmount(){
		console.log('---7');
	}

  render() {
    return <div>About</div>
  }
};
