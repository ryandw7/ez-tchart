import React, { useState, createContext, useContext } from 'react';
import MobileLine from './MobileLine';
import useLines, { linesObj } from '../context/MobileContext';

export default function Mobile() {

    
    const {lines, setLines} = useLines();

    const addLine = (e) => {
        console.log('adding line')
        e.preventDefault();
        setLines((prev)=>{
            return [...prev, linesObj]
        })
    }

    console.log(lines)
    return (
     
        <div id="mobile">
            {
                lines.map((item, index) => <MobileLine lineData={item} i={index} />)
            }
            <button onClick={addLine}>+</button>
        </div>
       
    )
}

current_finance = 0
eligble_finance = 2500

preorder_16_max:
  check_finance = new_amount + current_finance < eligble_finance