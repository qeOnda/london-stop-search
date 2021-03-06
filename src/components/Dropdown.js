const Dropdown = ({ categories, handleChange, cattype, tag }) => {

	return (
		<div className="col-span-6 sm:col-span-3 pl-3 pr-3">
			<label className="block text-sm font-medium text-gray-900 font-mono">{tag}</label>
			<select 
				onChange={handleChange} 
				name={cattype} 
				className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono"
			>
				<option 
					value="" 
					hidden="hidden" 
					selected="selected"
				>
					SELECT {tag}
				</option>		
				
				{categories.filter(cur => cur.cat === cattype).map(({name}) => (
					<option	value={name} className="font-mono">
						{name}
					</option>	
				))}
			</select>
		</div>	
	)
}

export default Dropdown;


