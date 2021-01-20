import React, { useState } from 'react';
import Switch from "react-switch";

function BoroughTog(props) {
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
	        	<span>HEATMAP ON/OFF</span>
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

export default BoroughTog;




// <div>
// 	<p>HEATMAP ON/OFF</p>
// 	<input
// 		onClick={() => changeState()}			          
// 		name="toggle"
// 		type="checkbox"	
// 	/>
// </div>	