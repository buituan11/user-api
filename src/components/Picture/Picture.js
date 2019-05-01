import React, { Component } from 'react';

class Picture extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	picture: [],
        	now: false
        }
    }

    fetchAPI = () => {
    	fetch( "https://randomuser.me/api" ) 
    	.then( resp => { return resp.json(); } )
    	.then( data => { 
    		let picture = data.results.map((pic) => {
    			return (
    				<div key={ pic.name.last }>
    					<img src={ pic.picture.large } alt=""/>
    				</div>  
    			)
    		})
    		this.setState({ picture: picture, now: true})
    	 })
    }

    render() {
        return (
        	<div> 
        		<h1> Random Face </h1>
        		{ this.state.now && this.state.picture }
        		<button 
        			type="button" 
        			className="btn btn-primary"
        			onClick={ () => this.fetchAPI() }> New </button>
        	</div>
        );
    };
}

export default Picture;
