import React, { useEffect, useState } from 'react'


 const Die = ({ color }) => {
    const [rolling, setRolling] =useState(false);
    useEffect(() => {
        setRolling(true)
        setTimeout(() => {
            setRolling(false);
        }, 5000);
       // eslint-disable-next-line
    }, [color]);

    
    return (
        <div className={`color-${color} p-20 die center ${rolling && 'rolling' }`}>
            <i className={ `p-10 die fas fa-dice-${color}  `}></i> 
        </div>
    )
    
}

export default Die