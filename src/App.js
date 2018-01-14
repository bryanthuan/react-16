import React, { Component } from 'react'
import logo from './logo.svg'
import classes from './App.css'
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{ id:'afery1', name: 'Max', age: 20 },
			{ id:'afery2', name: 'Max', age: 48 },
			{ id:'afery3', name: 'Max', age: 20 }
		],
		otherState: 'some other value',
		showPersons: false
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1)
		this.setState({ persons })
	}

	nameChangedHandler = ( event, id ) => {
		const personIndex = this.state.persons.findIndex(person => {
			return person.id === id
		})

		const person = {...this.state.persons[personIndex]}

		person.name = event.target.value

		const persons = [...this.state.persons]
		persons[personIndex] = person
		this.setState( { persons })
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons
		this.setState({ showPersons: !doesShow})
	}
	render() {
		const style = {
			backgroundColor: 'green',
			color:'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}
		let person = null
		if (this.state.showPersons) {
			person = (
				<div>
					{this.state.persons.map((person, index)=>{
						return <Person
							click={()=> this.deletePersonHandler(index)} 
							name={person.name} 
							age={person.age}
							key={person.id}
							changed = {(event) =>this.nameChangedHandler(event, person.id)} />
					})}									
				</div>
			)
			style.backgroundColor = 'red'			
		}

		const assignedClasses = []
		if (this.state.persons.length <=2){ 
			assignedClasses.push( classes.red )
		}
		if (this.state.persons.length <=1){
			assignedClasses.push( classes.bold )
		}
		return (			
			<div className={classes.App}>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Thuan, Welcome to React</h1>					
					
					<button 
					style={style}
					onClick={this.togglePersonHandler}>Toggle Persons</button>					
				</header>
				{person}
				<p className={assignedClasses.join(' ')}>This is really working !</p>
				
			</div>
			
		)
	}
}


export default App
