export const buildFilter = (total, arr) => {
	if (total === null) {
		var filter = [
			"all",
		];
		var select = [arr]
		filter.push(select)
	} else {
		var filter = [...total]
		var select = [...arr]
		filter.push(select)
	}
	// return filter
	console.log(select)
};

export const removeFilter = (total, item) => {
	if (total) {
		var i = 0
		var removeList = [total]
		// var remov = [...item]
		for (let i = 0; i < removeList.length; i++) {
			if (removeList[i].includes(item))
				console.log(removeList[i]) 	
		}



		// while (i < removeList.length) {
		// 	if (removeList[i][2] === "Male") {
		// 		console.log("yeahhh biatch") 
		// 		console.log(removeList[i][2]) 
		// 	} else {
		// 		++i
		// 	}
		// }
		// console.log(removeList)
		// return removeList		
	} 
};

// 	while (i < total.length) {
// 		if total[i] === arr {
// 			total.splice(i, 1); 
// 		} else {
// 			++i
// 		}
// 	}
// 	return total
// }

