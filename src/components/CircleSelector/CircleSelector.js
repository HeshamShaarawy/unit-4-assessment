import React from 'react';
import "./CircleSelector.css";

const CircleSelector = ({selected, handleClick}) => {
        return (
            <div className='CircleSelector'>
                <button className={selected === 1 ? 'selected': ''} onClick={() => handleClick(1)}>{ selected === 1 ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}</button>
                <button className={selected === 2 ? 'selected': ''} onClick={() => handleClick(2)} >{ selected === 2 ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}</button>
                <button className={selected === 3 ? 'selected': ''} onClick={() => handleClick(3)} >{ selected === 3 ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}</button>
                <button className={selected === 4 ? 'selected': ''} onClick={() => handleClick(4)} >{ selected === 4 ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}</button>
            </div>
        )
    
}

export default CircleSelector;