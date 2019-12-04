import React, { Component } from 'react';
import './App.css';
import Box from './components/box';

class App extends Component {

	constructor(props){
		super(props);
		this.flag=0;
		this.win=0;
		this.winner="-"
		this.reset=false;
		this.index=[{id : -1},
			{id : -1},
			{id : -1}]
	}
	state={
		counters: [
			{id: 1,value: "-"},
			{id: 2,value: "-"},
			{id: 3,value: "-"},
			{id: 4,value: "-"},
			{id: 5,value: "-"},
			{id: 6,value: "-"},
			{id: 7,value: "-"},
			{id: 8,value: "-"},
			{id: 9,value: "-"},
		]
	}

	checkWin(){

		if(((this.state.counters[0].value === "X") &&  //for ID = 1 for Value = X  of ID=(1,2,3)
			(this.state.counters[1].value === "X") &&
			(this.state.counters[2].value === "X"))|| 
			((this.state.counters[0].value === "O") &&  //for ID = 1 for Value = O  of ID=(1,2,3)
				(this.state.counters[1].value === "O") &&
				(this.state.counters[2].value === "O")))
		{
			this.index[0].id=1;
			this.index[1].id=2;
			this.index[2].id=3;
			this.winner=this.state.counters[0].value;
			this.win=1;
		}

		if(((this.state.counters[0].value === "X") &&  //for ID = 1 for Value = X  of ID=(1,4,7)
			(this.state.counters[3].value === "X") &&
			(this.state.counters[6].value === "X"))|| 
			((this.state.counters[0].value === "O") &&  //for ID = 1 for Value = O  of ID=(1,4,7)
				(this.state.counters[3].value === "O") &&
				(this.state.counters[6].value === "O")))
		{
			this.index[0].id=1;
			this.index[1].id=4;
			this.index[2].id=7;
			this.winner=this.state.counters[0].value;
			this.win=1;	
		}

		if(((this.state.counters[0].value === "X") &&  //for ID = 1 for Value = X of ID=(1,5,9)
			(this.state.counters[4].value === "X") &&
			(this.state.counters[8].value === "X"))|| 
			((this.state.counters[0].value === "O") &&  //for ID = 1 for Value = O of ID=(1,5,9)
				(this.state.counters[4].value === "O") &&
				(this.state.counters[8].value === "O")))
		{
			this.index[0].id=1;
			this.index[1].id=5;
			this.index[2].id=9;
			this.winner=this.state.counters[0].value;
			this.win=1;
		}

		if(((this.state.counters[1].value === "X") &&  //for ID = 2 for Value = X of ID=(2,5,8)
			(this.state.counters[4].value === "X") &&
			(this.state.counters[7].value === "X"))|| 
			((this.state.counters[1].value === "O") &&  //for ID = 2 for Value = O of ID=(2,5,8)
				(this.state.counters[4].value === "O") &&
				(this.state.counters[7].value === "O")))
		{
			this.index[0].id=2;
			this.index[1].id=5;
			this.index[2].id=8;
			this.winner=this.state.counters[1].value;
			this.win=1;
		}

		if(((this.state.counters[2].value === "X") &&  //for ID = 3 for Value = X of ID=(3,6,9)
			(this.state.counters[5].value === "X") &&
			(this.state.counters[8].value === "X"))|| 
			((this.state.counters[2].value === "O") &&  //for ID = 3 for Value = O of ID=(3,6,9)
				(this.state.counters[5].value === "O") &&
				(this.state.counters[8].value === "O")))
		{
			this.index[0].id=3;
			this.index[1].id=6;
			this.index[2].id=9;
			this.winner=this.state.counters[2].value;
			this.win=1;
		}

		if(((this.state.counters[2].value === "X") &&  //for ID = 1 for Value = X of ID=(3,5,7)
			(this.state.counters[4].value === "X") &&
			(this.state.counters[6].value === "X"))|| 
			((this.state.counters[2].value === "O") &&  //for ID = 1 for Value = O of ID=(3,5,7)
				(this.state.counters[4].value === "O") &&
				(this.state.counters[6].value === "O")))
		{
			this.index[0].id=3;
			this.index[1].id=5;
			this.index[2].id=7;
			this.winner=this.state.counters[2].value;
			this.win=1;
		}

		if(((this.state.counters[3].value === "X") &&  //for ID = 1 for Value = X of ID=(4,5,6)
			(this.state.counters[4].value === "X") &&
			(this.state.counters[5].value === "X"))|| 
			((this.state.counters[3].value === "O") &&  //for ID = 1 for Value = O of ID=(4,5,6)
				(this.state.counters[4].value === "O") &&
				(this.state.counters[5].value === "O")))
		{
			this.index[0].id=4;
			this.index[1].id=5;
			this.index[2].id=6;
			this.winner=this.state.counters[3].value;	
			this.win=1;
		}

		if(((this.state.counters[6].value === "X") &&  //for ID = 1 for Value = X of ID=(7,8,9)
			(this.state.counters[7].value === "X") &&
			(this.state.counters[8].value === "X"))|| 
			((this.state.counters[6].value === "O") &&  //for ID = 1 for Value = O of ID=(7,8,9)
				(this.state.counters[7].value === "O") &&
				(this.state.counters[8].value === "O")))
		{
			this.index[0].id=7;
			this.index[1].id=8;
			this.index[2].id=9;
			this.winner=this.state.counters[6].value;
			this.win=1;
		}
		this.reset=false;

	}

	handlePress =(id) => {
		if(this.win===0){

			const counters=[...this.state.counters];
			const index= id-1;
			let val="0";

			if(counters[index].value !=="O" &&
				counters[index].value !=="X")
			{
				if(this.flag===0)
				{
					val="O";
					this.flag=1;
				}
				else{
					val="X";
					this.flag=0;
				}
				counters[index].value=val;
				this.setState({ counters });
				this.checkWin();
			}
		}
	}

	handleReset = () =>{
		const counters=this.state.counters.map(c =>{
			c.value="-";
			return c;
		})
		this.setState({counters});
		this.win=0;
		this.reset=true;
		this.index[0].id=-1;
		this.index[1].id=-1;
		this.index[2].id=-1;
	}

	getWinner(){

		let string=null;
		if(this.win===0)
		{
			string="Who is gonna be WINNER?";
		}
		else
		{
			if(this.winner==="X")
			{
				string="The WINNER is Player-2";
			}
			else
			{
				string="The WINNER is Player-1";
			}
		}
		return string;
	}

	render() {
		return (
			<React.Fragment>
			<div className="shadow p-3 mb-5 bg-white rounded text-center text-muted text-primary"><h2>
			Tic Tac Toe</h2>
			</div> 
			<div className="container">
			<div className="row justify-content-md-center">
			<div className="row">
			<div className="col">
			<Box counters={this.state.counters[0].id}
			val={this.state.counters[0].value}
			win={this.win}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[0].id)}
			index={this.index}
			isReset={this.reset}/>	  
			</div>
			<div className="col">
			<Box counters={this.state.counters[1].id}
			val={this.state.counters[1].value}
			win={this.win}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[1].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			<div className="col">
			<Box counters={this.state.counters[2].id}
			val={this.state.counters[2].value}
			win={this.win}
			onReset={this.handleReset}	
			onPress={this.handlePress.bind(this,this.state.counters[2].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			</div>
			<div className="w-100"></div>
			<div className="row p-3">
			<div className="col">
			<Box counters={this.state.counters[3].id}
			val={this.state.counters[3].value}
			win={this.win}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[3].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			<div className="col">
			<Box counters={this.state.counters[4].id}
			val={this.state.counters[4].value}
			win={this.win}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[4].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			<div className="col">
			<Box counters={this.state.counters[5].id}
			val={this.state.counters[5].value}
			win={this.win}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[5].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			</div>
			<div className="w-100"></div>
			<div className="row">
			<div className="col">
			<Box counters={this.state.counters[6].id}
			val={this.state.counters[6].value}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[6].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			<div className="col">
			<Box counters={this.state.counters[7].id}
			val={this.state.counters[7].value}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[7].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			<div className="col">
			<Box counters={this.state.counters[8].id}
			val={this.state.counters[8].value}
			onReset={this.handleReset}
			onPress={this.handlePress.bind(this,this.state.counters[8].id)}
			index={this.index}
			isReset={this.reset}/>
			</div>
			</div>
			</div>
			</div>

			<ul className="nav justify-content-center">
			<li className="nav-item p-5">
			<button className="btn btn-outline-primary" type="submit" onClick={this.handleReset}>Play Again</button>
			</li>
			</ul>

			<nav className="navbar navbar-dark bg-primary nav justify-content-center text-monospace font-weight-bold text-white ">
			{this.getWinner()}
			</nav>


			</React.Fragment>
		);
	}
}

export default App;
