import React, { useState } from 'react';
import Switch from "react-switch";


function OnOff(props) {
	const map = props.map
	const [on, setOn] = useState(false)

	const changeState = () => {
		if (!on)  {
			map.setLayoutProperty('circles', 'visibility', 'visible')	
		} else {					
			map.setLayoutProperty('circles', 'visibility', 'none')
		}
		setOn(!on)
	} 

	return (
		<div>
			<label>
	        	<span>Points ON/OFF</span>
		        <Switch 
		        	onChange={() => changeState()}			          
		        	checked={on}
		        	height={14}
		        	width={28}
		        	handleDiameter={12}
		        />
	      </label>	
		</div>	
	)
}

export default OnOff;



		// <div>
		// 	<p>DOTS ON/OFF</p>
		// 	<input
		// 		onChange={() => changeState()}			          
		// 		name="toggle"
		// 		type="checkbox"	
		// 		checked={on}
		// 	/>
		// </div>	