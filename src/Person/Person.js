import React from 'react'

import './Person.css'
const Person = (props) => {
	
	return (
		<div className='Person'>
			<p onClick={props.click}>Hello, {props.name} is a good Person, {props.age} years old</p>
			<p>{props.children}</p>
			<p>Input Name</p>
			<input type="text" 
				value={props.name} 
				onChange={props.changed}/>
		</div>
	)
}

export default Person