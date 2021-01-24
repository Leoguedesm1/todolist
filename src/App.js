import { Component} from 'react';
import Header from './components/Header/Header';
import Tab from './components/Tab/Tab';
import TabComplete from './components/TabComplete/TabComplete';
import TabToDo from './components/TabToDo/TabToDo';
import './App.css'

class App extends Component {

	constructor() {
		super();
		this.state = {
			completed: [],
			todo: []
		}
	}

	componentDidMount() {
		let completed = JSON.parse(localStorage.getItem("completed"));
		if(completed == null) {
			localStorage.setItem('completed', JSON.stringify([]));
			completed = []
		}
	
		let todo = JSON.parse(localStorage.getItem("todo"));
		if(todo == null) {
			localStorage.setItem('todo', JSON.stringify([]));
			todo = []
		}

		this.setState({ completed, todo })
	}

	addTask() {
		let todo = [...this.state.todo]
		todo.push("New Task...");
		this.setState({ todo }, () => localStorage.setItem('todo', JSON.stringify(todo)))
	}

	completeTask(index) {
		let todo = [...this.state.todo]
		let completed = [...this.state.completed]
		completed.push(todo[index])
		todo.splice(index, 1)
		this.setState({ completed, todo }, () => {
			localStorage.setItem('todo', JSON.stringify(todo));
			localStorage.setItem('completed', JSON.stringify(completed))
		})
	}

	removeTask(index) {
		let todo = [...this.state.todo]
		todo.splice(index, 1);
		this.setState({ todo }, () => localStorage.setItem('todo', JSON.stringify(todo)) )
	}

	deleteTask(index) {
		let completed = [...this.state.completed]
		completed.splice(index, 1);
		this.setState({ completed }, () => localStorage.setItem('completed', JSON.stringify(completed)))
	}

	changeTask(text, index) {
		let todo = [...this.state.todo]
		todo[index] = text;
		this.setState({ todo }, () => localStorage.setItem('todo', JSON.stringify(todo)))
	}

	undoTask(index) {
		let todo = [...this.state.todo]
		let completed = [...this.state.completed]
		todo.push(completed[index])
		completed.splice(index, 1)
		this.setState({ todo, completed }, () => {
			localStorage.setItem('todo', JSON.stringify(todo));
			localStorage.setItem('completed', JSON.stringify(completed));
		})
	}

	render() {
		return (

			<div className="App">
				<Header 
					onClick={this.addTask.bind(this)}
				/>
	
				<Tab>
					<TabToDo 
						items={this.state.todo}
						edit={this.changeTask.bind(this)}
						delete={this.removeTask.bind(this)}
						complete={this.completeTask.bind(this)}
					/>
					<TabComplete 
						items={this.state.completed}
						undo={this.undoTask.bind(this)}
						delete={this.deleteTask.bind(this)}
					/>
				</Tab>
	
			</div>
		);
	}
	
}

export default App;
