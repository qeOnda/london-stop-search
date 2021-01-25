import React, { useState } from 'react';
import Switch from "react-switch";

function BoroughToggler(props) {
	const map = props.map
	const [on, setOn] = useState(true)

	const changeState = () => {
		if (!on)  {
			map.setLayoutProperty('boro-boundary', 'visibility', 'visible')	
		} else {					
			map.setLayoutProperty('boro-boundary', 'visibility', 'none')
		}
		setOn(!on)
	} 

	return (
		<div>
			<label>
	        	<span className="font-mono">HEATMAP</span>
		        <Switch 
		        	onChange={() => changeState()}			          
		        	height={14}
		        	checked={on}
		        	width={28}
		        	handleDiameter={12}
		        />
	      </label>	
		</div>	
	)
}

export default BoroughToggler;
