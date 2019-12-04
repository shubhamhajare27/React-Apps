import React, { Component } from 'react';

class Box extends Component{
	render(){
		
		return(
		<div>
			<button type="button" className={this.getBadgeClass()} onClick={()=> this.props.onPress(this.props.counters)}>{this.props.val}</button>
		</div>);
	}

	getBadgeClass()
	{
		let classes="btn btn-outline-dark";

		if((this.props.counters===this.props.index[0].id) ||
		   (this.props.counters===this.props.index[1].id) ||
		   (this.props.counters===this.props.index[2].id))
		{
			classes +=" text-danger ";
		}

		if(this.props.isReset===true)
		{
			classes="btn btn-outline-dark";
		}
		
		return classes;
		
	}
}

export default Box;
