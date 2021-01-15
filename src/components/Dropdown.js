const Dropdown = ({ categories, handleChange, cattype, tag }) => {

	return (
		<div className="pt-2">
			<h3><strong>{tag}</strong></h3>
			<select onChange={handleChange} name={cattype}>
				<option disabled selected value>SELECT {tag}</option>		
				{categories.filter(cur => cur.cat === cattype).map(({name}) => (
					<option	value={name}>
						{name}
					</option>	
				))}
			</select>
		</div>	
	)
}

export default Dropdown;