import React, {useState} from "react";

const COunterComponent=()=>{

const [count, setCount]=useState(0);   //this is useState hook means to set the state of the component, means of change in count variable, setCount will run and will update the handleCLick funciton 

const handleClick=()=>{
    setCount(count+1);   //means on clicking button, we are saying that increase count by 1 means count+1
}
return (
    <button onClick={handleClick}>
      Count me {count} times
    </button>
)



}

export default COunterComponent;