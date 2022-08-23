import React, { useEffect } from 'react'

const useOnClickOutside=(ref,handler)=> {
    useEffect(() => {
        const listener = (event) =>{
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            //모달밖이라면 
            handler();
        };
      document.addEventListener("mousedown",listener);
      document.addEventListener("touchstart",listener);
    
      return () => {
        document.addEventListener("mousedown",listener);
        document.addEventListener("touchstart",listener);
      }
    }, [])
    
}

export default useOnClickOutside