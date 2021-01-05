import React, { useState } from 'react';

function BoroughTog(props) {
	const map = props.map
	const [on, setOn] = useState(false)

	const changeState = () => {
		if (on)  {
			map.setLayoutProperty('boro-boundary', 'visibility', 'visible')	
		} else {					
			map.setLayoutProperty('boro-boundary', 'visibility', 'none')
		}
		setOn(!on)
	} 

	return (
		<div>
			<p>HEATMAP ON/OFF</p>
			<input
				onClick={() => changeState()}			          
				name="toggle"
				type="checkbox"	
			/>
		</div>	
	)
}

export default BoroughTog;