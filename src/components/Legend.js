import React from 'react'


function Legend() {
	return (	
      <div className="bg-gray-100 opacity-90 fixed bottom-0 w-44 ml-2 p-1 mb-10 pr-2 pl-2">      
        <strong className="mb-2 text-sm block">Total Stops</strong>
        <p className="mb-4 text-xs text-gray-600">Number of stops per year</p>
        <div className="mb-2 grid grid-rows-1 grid-flow-col">        
        	<div className="bg-one "></div>  
        	<div className="bg-two "></div>  
        	<div className="bg-three "></div>  
        	<div className="bg-four "></div>  
        	<div className="bg-five "></div> 
        	<div className="bg-six ">&nbsp;</div>  
        </div>
         <div class='flex text-xs'>
		    <div class='flex-grow'>0</div>
		    <div class=''>15,000</div>
		</div>

      </div>
	)
}


export default Legend;

