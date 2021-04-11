import React, { useState } from 'react';
import './AppFunction.css';

const App = () => {
	const [count,setCount] = useState(0)    
   const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}

   return(
      <div className='count'>
			<div className='indiv'>	
			 <button className='btn' onClick={decrement} >-</button>
			 {
			 	// if(count<5){
				// 	return ( <p className='score' style={{color:"red"}}  >{count}</p>);
				//  }
				count<5? <p className='score' style={{color:"red"}}  >{count}</p>:count>100? <p className='score' style={{color:"green"}}  >{count}</p>: <p className='score' >{count}</p>

			}
			
			 <button className='btn' onClick={increment} >+</button>
          </div>
 </div>


   	);

}
export default App;