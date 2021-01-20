import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import boro_data from './data/london.geojson'
import point_data from './data/points.geojson'

import Tooltip from './components/Tooltip'
import TipPoints from './components/TipPoints'

import { categories } from './data/categories'
import BoroughTog from './toggle/BoroughTog'
import OnOff from './toggle/OnOff'
import PointsTog from './toggle/PointsTog'




mapboxgl.accessToken = 'pk.eyJ1IjoicWVvbmRhIiwiYSI6ImNraWdwbTZ4ZjAzdTMycnA4ZzB0Y3M1bTUifQ.RZRop7OPTjGFz4VIaNwqzw'

function Mapper() {
	const mapContainerRef = useRef(null);
	const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
	const [map, setMap] = useState(null)
	

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-0.1213, 51.4932],
			zoom: 9.5,
			minZoom: 8,
			maxZoom: 14,
		})

		map.on('load', function() {
			map.addSource('borough', {
				type: 'geojson',
				data: boro_data,
				
			});	

			map.addLayer({
				'id': 'boro-boundary',
				'type': 'fill',
				'source': 'borough',
				'paint': {
					'fill-color': [
						'interpolate',
						['linear'],
						['get', 'total'],
						0,
						'#F2F12D',
						1500,
						'#EED322',
						3000,
						'#E6B71E',
						4500,
						'#DA9C20',
						6000,
						'#CA8323',
						7500,
						'#B86B25',
						9000,
						'#A25626',
						10500,
						'#8B4225',
						15000,
						'#723122'
					],
					'fill-opacity': 0.75
				},
				'filter': ['==', '$type', 'Polygon'],
				// layout: {
				// 		'visibility': 'visible'
				// }
				layout: {
					'visibility': 'none'
				},
			});

			map.addLayer({
				'id': 'boro-borders',
				'type': 'line',
				'source': 'borough',
				'paint': {
					'line-color': 'gray',
					'line-width': 1
				},
				'filter': ['==', '$type', 'Polygon'],
			});

			map.on('mousemove', 'boro-boundary', e => {
				const features = map.queryRenderedFeatures(e.point);
				if (features.length) {
					const feature = features[0];

					// Create tooltip node
        			const tooltipNode = document.createElement('div'); 	
        			ReactDOM.render(<Tooltip feature={feature} />, tooltipNode);

        			tooltipRef.current
        				.setLngLat(e.lngLat)
        				.setDOMContent(tooltipNode)
        				.addTo(map);
        		}
        	});
		});	



		map.on('load', function() {
			map.addSource('points', {
				type: 'geojson',
				data: point_data,
			});		

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
						9.5, 0.8,
						// 12.5, 2.5,
						14, 4,
		            ],
					'circle-color': 'red'
				},
				// layout: {
				// 	'visibility': 'none'
				// },
			})	

			map.on('click', 'circles', e => {
				const features = map.queryRenderedFeatures(e.point);
				if (features.length) {
					const feature = features[0];

					// Create tooltip node
        			const tooltipNode = document.createElement('div'); 	
        			ReactDOM.render(<TipPoints feature={feature} />, tooltipNode);

        			tooltipRef.current
        				.setLngLat(e.lngLat)
        				.setDOMContent(tooltipNode)
        				.addTo(map);
        		}	
        	});

        	map.on('sourcedata', (e)=> {
			    if (map.loaded()) {
				 	console.log("haggggg")	
			    }
			});

        	setMap(map);
		});	
	}, [])

	

	
	return (
		<div className="flex flex-row ">	  
			<div ref={mapContainerRef} className="h-screen w-3/4"/>

			<div className="w-1/4 bg-gray-300">
				<div className="pl-3 pt-2">	
					<h1>heloooooo</h1>
					<BoroughTog 
						map={map}
					/>
					<OnOff
						map={map}
					/>
				</div>	
			    <PointsTog
			    	map={map}
			    	categories={categories}
			    />
			</div>
		</div>
	)
	
}
export default Mapper;


