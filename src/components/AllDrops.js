import Dropdown from './Dropdown'
import React, { useState } from 'react'

import Reset from './Reset'

function AllDrops (props) {
	const [cats] = useState([
			{name:"type", print: "Type"},
			{name:"gender", print: "Gender"},
			{name:"age", print: "Age Range"},
			{name:"ethnicity", print: "Ethnicity"},
			{name:"purpose", print: "Purpose of Stop"},
			{name:"outcome", print: "Outcome"},
		])

	const renderDrops = (option) => {
		return (
			<div className="pt-2">
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype={option.name}
					tag={option.print}
				/>
			</div>	
		)
	}

	return (
		<div>
			<form id="form">
			{cats.map(renderDrops)}
				<div className="pt-4">
					<Reset 
						handleReset={props.handleReset}						
					/>
				</div>				
			</form>	
		</div>	
	)
}


export default AllDrops

