import Dropdown from './Dropdown'


function AllDrops (props) {
	return (
		<div>
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
		</div>	
	)
}

export default AllDrops