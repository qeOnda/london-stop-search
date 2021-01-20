import React, { useEffect, useState } from 'react';
import AllDrops from '../components/AllDrops'


function PointsTog(props) {
	const map = props.map
	const [filterer, setFilterer] = useState()
	const categories = props.categories

	const handleChange = e => {
		setFilterer({
			...filterer,
			[e.target.name]: e.target.value
		})
	}

	const handleReset = () => {
		setFilterer()
		map.setFilter('circles', null)
	}


	useEffect(() => {
		if(map){
			if (filterer){
				var f = ["all", ]
				const checker = {...filterer}

				// console.log	(checker)
				for(const [key, value] of Object.entries(checker)) {
					if (value === "All"){
						delete checker[key]						
					} else {
						let i = ["in", key, value]
						f.push(i)
					}
				}	
				map.setFilter('circles', f)
			}
		}
	})
	
////////////////////////////////////////////////////////////////////////////////////

	// const [f, setF] = useState()
	// const [test, setTest] = useState("Female")

	// const getData=()=>{
	// 	fetch('points.geojson'
	// 	,{
	// 		headers : { 
	// 			'Content-Type': 'application/json',
	// 			'Accept': 'application/json'
	// 		}
	// 	})
	// 	.then(function(response){
	// 		// console.log(response)
	// 		return response.json();
	// 	})
	// 	.then(function(myJson) {
	// 		const foo = myJson
	// 		setF(foo);
	// 	});
	// }
	
	
	// const handleTest = () => {
	// 	setTest("Male")
	// 	console.log(test)
	// }

	// useEffect(()=>{
	// 	getData()
	// 	if (test && f) {
	// 		var geojson = {
	// 		  "type": "FeatureCollection",
	// 		  "features": []
	// 		};

	// 		var b = f.features.filter(feature => feature.properties.gender === test)
	// 		geojson.features.push(b)
	// 		map.getSource('points').setData(geojson);
	// 		// console.log(map.getSource('points'))
	// 	}
	// }, [test])



	return (
		<div className="pt-10 ">
			<AllDrops
				categories={categories}
				handleChange={handleChange}
				handleReset={handleReset}
			/>
		</div>	
	)
}

export default PointsTog;



	//<div className="mt-4 bg-red">
					//<button onClick={handleTest}>Click Me</button>
			//</div>	
