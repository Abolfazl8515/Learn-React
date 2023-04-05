import { useEffect, useState } from "react";

const ClassTimer = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const myTimer = setInterval(() => {
            setCount(count+1);
        }, 1000);

        return ()=>{
            clearInterval(myTimer);
        }
    },[count])
    return ( 
        <h1>Class Interval {count}</h1>
     );
}
 
export default ClassTimer;