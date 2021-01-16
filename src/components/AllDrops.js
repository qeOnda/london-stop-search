import Dropdown from './Dropdown'


function AllDrops (props) {
	return (
		<div>
			<form id="form">
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype="type"
					tag="Type"
				/>
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype="gender"
					tag="Gender"

				/>
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype="age_range"
					tag="Age Range"

				/>
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype="ethnicity"
					tag="Ethnicity"

				/>
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype="purpose"
					tag="Purpose"

				/>
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype="outcome"
					tag="Outcome"

				/>
				<Dropdown 
					categories={props.categories}
					handleChange={props.handleChange}
					cattype="officer_ethnicity"
					tag="Officer Ethnicity"
				/>
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