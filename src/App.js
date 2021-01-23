import logo from './logo.svg';
import Header from './components/Header/Header';
import Tab from './components/Tab/Tab';
import TabComplete from './components/TabComplete/TabComplete';
import TabToDo from './components/TabToDo/TabToDo';
import './App.css'

function App() {
  return (

	<div className="App">
		<Header 
			onClick={() => console.log('teste')}
		/>

		<Tab>
			<TabToDo />
			<TabComplete />
		</Tab>

	</div>
  );
}

export default App;
