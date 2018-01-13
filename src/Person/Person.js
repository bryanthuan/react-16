import React from 'react'
import Radium from 'radium'
import './Person.css'
const Person = (props) => {
	const style = {
		'@media (min-width: 500px)':{
			width: '450px'
		}
	}
	return (
		<div className='Person' style={style}>
			<p onClick={props.click}>Hello, {props.name} is a good Person, {props.age} years old</p>
			<p>{props.children}</p>
			<p>Input Name</p>
			<input type="text" 
				value={props.name} 
				onChange={props.changed}/>
		</div>
	)
}

export default Radium(Person)