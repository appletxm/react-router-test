import React from 'react'

const About = class extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		console.info('--------', this.props.location.query);
	}

	render() {
	    return <div>About</div>
  	}
}
export default About;
