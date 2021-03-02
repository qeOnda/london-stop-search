import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import Tooltip from './components/Tooltip'
import TipPoints from './components/TipPoints'
import { categories } from './data/categories'
import BoroughToggler from './toggle/BoroughToggler'
import OnOff from './toggle/OnOff'
import PointsToggler from './toggle/PointsToggler'
import Modal from './components/Modal'
import { about } from './text-files/about'
import { data } from './text-files/data-about'


const { REACT_APP_MY_ENV } = process.env;
mapboxgl.accessToken = REACT_APP_MY_ENV 

function Mapper(props) {
	const mapContainerRef = useRef(null);
	const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
	const [map, setMap] = useState(null)

	const heatmapRef = useRef(null);
	

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-0.1213, 51.4932],
			zoom: 9.5,
			minZoom: 8,
			maxZoom: 15,
		})

		map.on('load', function() {
			map.addSource('borough', {
				type: 'geojson',
				data: 'https://qeonda.github.io/points_json/london.geojson'
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
						3000,
						'#E6B71E',
						6000,
						'#CA8323',
						9000,
						'#A25626',
						12000,
						'#8B4225',
						15000,
						'#723122'
					],					
					'fill-opacity': [
						'case',
						['boolean', ['feature-state', 'hover'], false],
						1.2,
						0.6					
					]
				},
				'filter': ['==', '$type', 'Polygon'],
				layout: {
						'visibility': 'visible'
				}
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
        			
        			if (heatmapRef) {
        				map.setFeatureState(
							{ source: 'borough', id: heatmapRef.current },
							{ hover: false }
						);
        			}	
        			heatmapRef.current = e.features[0].id;
        			map.setFeatureState(
						{ source: 'borough', id: heatmapRef.current },
						{ hover: true }
					);
        		}
        	});
        	
        	map.on('mouseleave', 'boro-boundary', function () {
				map.getCanvas().style.cursor = '';
				tooltipRef.current.remove();
				if (heatmapRef) {
					map.setFeatureState(
						{ source: 'borough', id: heatmapRef.current },
						{ hover: false }
					);
				}
			});
        	setMap(map);
		});	

		map.on('load', function() {
			map.addSource('points', {
				type: 'geojson',
				data: 'https://qeonda.github.io/points_json/points.geojson'
			});		

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
		});	
	}, [])


	return (
		<div className="viewport-full relative flex flex-row ">	  
			<Modal 
				toggler={props.toggleAbout}
				show={props.showAbout}
				text={about}
				className="bg-yellow-200"
			/>
			<Modal 
				toggler={props.toggleData}
				show={props.showData}
				text={data}
				className="bg-yellow-200"
			/>
			<div ref={mapContainerRef} className="h-screen w-3/4"/>
			<div className="w-1/4 bg-yellow-500">
				<div className="pt-5 font-mono text-2xl md:text-4xl font-bold lg:text-5xl text-center">
					<span>London<br />Stop &<br />Search</span>
				</div>
				<div className="pl-3 pt-8">	
					<BoroughToggler 
						map={map}
					/>
					<OnOff
						map={map}						
					/>
				</div>	
				<div className="pt-2">  
				    <PointsToggler
				    	map={map}
				    	categories={categories}
				    />
				</div> 			 
			</div>
		</div>
	)
}
export default Mapper;