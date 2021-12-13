import React, { useState,useEffect,useCallback,useRef } from 'react'

function Xindow() {
    const size=useWindowSize()
    return (
        <div>
            <h1>we will creata custom Window Hook</h1>
            <p>Height and weight</p>
            <h1>width : {size.width} Height:{size.height} </h1>
            <Kgf/>
        </div>
    )
}
export default Xindow

export function Kgf() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    function saq() {
        setCoords({
            x:event.clientX,
            y:event.clientY
        })
    }
    useEffect(()=>{
        window.addEventListener("mousemove",saq)
        return ()=>{
            window.removeEventListener("mousemove",saq)
        }
    },[])
    return(<div>
        <p>Position of Mouse Cordinats are</p>
        <h1>X {coords.x} Y {coords.y}</h1>
    </div>)
}

 
export function useWindowSize() {
    
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Call handler right away so state gets updated with initial window size
      handleResize();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }


function useEventListener(eventName, handler, element ) {
    
    // Create a ref that stores handler
    const savedHandler = useRef();
  
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(
      () => {
        // Make sure element supports addEventListener
        // On
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
  
        // Create event listener that calls handler function stored in ref
        const eventListener = (event) => savedHandler.current(event);
  
        // Add event listener
        element.addEventListener(eventName, eventListener);
  
        // Remove event listener on cleanup
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
    );
  }