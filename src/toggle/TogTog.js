import React, { useState } from 'react';

function TogTog(props) {
	const map = props.map
	const [on, setOn] = useState(false)

	const changeState = () => {
		if (on)  {
			map.setLayoutProperty('circles', 'visibility', 'visible')	
		} else {					
			map.setLayoutProperty('circles', 'visibility', 'none')
		}
		setOn(!on)
	} 

	return (
		<div>
			<p>DOTS ON/OFF</p>
			<input
				onClick={() => changeState()}			          
				name="toggle"
				type="checkbox"	
			/>
		</div>	
	)
}

export default TogTog;