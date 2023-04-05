import { useEffect, useState } from "react";

const ClassCounter = () => {
    const [name,setName] = useState("");
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Clicked ${count} times`;
        console.log("Count updating");
    },[count])

    return (  
        <div>
            <input type="text" onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=> setCount(count+1)}>count : {count}</button>
        </div>
    );
}
 
export default ClassCounter;