import React, { useState } from 'react';
import Back from './Back';
import data from './data';

const Main=()=>{
    const [question,setQuestion]=useState(data);
    console.log(setQuestion);
    return(
        <>
        <div style={{'textAlign':'center', 'marginTop':'2rem'}} >
            <h1>React Questions</h1>
        </div>
        <div className="total" style={{'marginTop':'3rem'}}>
            {
                
                question.map((ele)=>{
                   return(
                       <div key={ele.id}><Back {...ele} /></div>
                   )
                })
            }
        </div>
        </>
    )
}

export default Main