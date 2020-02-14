import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ManageBooks from './pages/ManageBooks'
import ManageStudents from './pages/ManageStudents'
import AddStudents from './pages/AddStudents';

class App extends React.Component{
	render(){
		return(
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/students/manage" component={ManageStudents}/>
				<Route exact path="/books/manage" component={ManageBooks}/>
				<Route exact path="/students/add" component={AddStudents}/>
			</Switch>
		)
	}
}

export default App;
