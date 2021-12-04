import React from 'react'
import './Circles.css'


const Circles = ({selected}) => {
    return(
        <div className="Circles">
             <div className={selected === 1 ? 'selected': ''}>1</div>
             <div className={selected === 2 ? 'selected': ''}>2</div>
             <div className={selected === 3 ? 'selected': ''}>3</div>
             <div className={selected === 4 ? 'selected': ''}>4</div>
        </div>
    
    )
}


export default Circles;