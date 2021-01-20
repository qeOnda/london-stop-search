import Dropdown from './Dropdown'
import React, { useState } from 'react'

function AllDrops (props) {
	const [cats] = useState([
			{name:"type", print: "Type"},
			{name:"gender", print: "Gender"},
			{name:"age_range", print: "Age Range"},
			{name:"ethnicity", print: "Ethnicity"},
			{name:"purpose", print: "Purpose"},
			{name:"outcome", print: "Outcome"},
			{name:"officer_ethnicity", print: "Officer Ethnicity"},
		])

	const renderDrops = (option) => {
		return (
			<div className="">
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
					<input 
						type="reset" 
						onClick={() => props.handleReset()} 
						className="ml-3 bg-red-500 active:bg-red-700 rounded-md shadow-sm py-2 px-3"
					/>	
				</div>				
			</form>	
		</div>	
	)
}


// className="ml-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
export default AllDrops

