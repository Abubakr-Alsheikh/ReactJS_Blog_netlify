import { useState, useEffect } from "react";

const useWindowSize = () =>{
    const [windowSize, setWindowSize] = useState({
        height:undefined,
        width:undefined
    });
    
    useEffect(()=>{
        const handleResize = ()=>{
            setWindowSize({
                height:window.innerHeight,
                width:window.innerWidth
            });
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        const cleanUp = () =>{
            window.removeEventListener("resize",handleResize);
            console.log("Clean has been done.")
        }
        return cleanUp;
    },[])
    return windowSize;
}

export default useWindowSize;