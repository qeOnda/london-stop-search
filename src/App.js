import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Mapper from './Mapper'


function App() {
  	const [showAbout, setShowAbout] = useState(false)
  	const [showData, setShowData] = useState(false)

  	const toggleAbout = () => {
  		setShowAbout(!showAbout)
  		if(showData){
  			setShowData(!showData)
  		}
  	}
	const toggleData = () => {
		setShowData(!showData)
		if(showAbout){
  			setShowAbout(!showAbout)
  		}
	}

  return (
	    <div className="flex flex-row h-full">
			<div className="w-1/12">
				<Sidebar 					
					toggleAbout={toggleAbout}	
					toggleData={toggleData}			
				/>
			</div>
			<div className="w-11/12">
				<Mapper 
					showAbout={showAbout}
					showData={showData}
					toggleAbout={toggleAbout}
					toggleData={toggleData}
				/>
			</div>	
		</div>
  );
}

export default App;
