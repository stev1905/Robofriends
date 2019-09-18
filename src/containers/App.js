import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:[],
			searchfield:''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots: users})});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ?
			<h1>Loading...</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
				<Cardlist robots = {filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;

//*RULE
// PROPS are simply things that come out of STATE 
// so a parent feeds state into a child component and as soon as the 
// child components component a state it's a property
// that child can never change that property the parent just tells it 
// what the state is the child we series it as robots

// STATE >> PROPS*/
