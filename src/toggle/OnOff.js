import React, { useState } from 'react';
import Switch from "react-switch";



function OnOff(props) {
	const map = props.map
	const [on, setOn] = useState(false)
	const [spinner, setSpinner] = useState(false)

	const changeState = () => {
		if (!on)  {
			setSpinner(true)
			map.addLayer({
				'id': 'circles',
				'type': 'circle',
				'source': 'points',
				'buffer': 0,
				'paint': {
					'circle-radius': [
						'interpolate',
						['linear'],
						['zoom'],
						9.5, 0.9,
						15, 4,
		            ],
					'circle-color': 'red'
				},
				layout: {
					'visibility': 'visible',
				},
			});
			map.on('render', stopSpinner);
		} else {					
			map.removeLayer('circles');
		}
		setOn(!on)
	} 

	function stopSpinner (e) {
		if (e.target && e.target.loaded()) {
			setSpinner(false);
			map.off('render', stopSpinner)
		}
 	}

	if(spinner){
		return (
			<div>
				<div className='flex-parent flex-parent--center-cross flex-parent--center-main absolute top right bottom left bg-darken10 z5'>
	        		<div className='flex-child loading'></div>
	    		</div>
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
	} else {
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
}

export default OnOff;

