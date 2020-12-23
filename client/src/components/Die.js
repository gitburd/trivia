import React, { useEffect, useState, useRef } from 'react'
import pure from 'recompose/pure'

function useIsMountedRef(){  const isMountedRef = useRef(null);  useEffect(() => {    isMountedRef.current = true;    return () => isMountedRef.current = false;  });  return isMountedRef;}

const Die = ({ color}) => {
    const isMountedRef = useIsMountedRef();
    const [rolling, setRolling] = useState(false);
    useEffect(() => {
        if(isMountedRef.current){          
            setRolling(true)
            setTimeout(() => {
                setRolling(false);
            }, 5000);    
        }
       // eslint-disable-next-line
    }, [color]);

    
    return (
        <div className={`color-${color} p-10 die center ${rolling && 'rolling' }`}>
            <i className={ `p-10 die fas fa-dice-${color}  `}></i> 
        </div>
    )
    
}

export default pure(Die);