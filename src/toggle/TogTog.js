import React, { useState } from 'react';

function TogTog(props) {
	const map = props.map
	const [on, setOn] = useState(true)

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
				checked={on}
			/>
		</div>	
	)
}

export default TogTog;