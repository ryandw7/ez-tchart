import React from 'react';

import MobileLineDetailsComp from '../components/MobileLineDetailsComp';
import MobileLineForm from '../components/MobileLineForm';
import useLines from '../context/MobileContext';
export default function MobileLine({ i, toggleEdit, updateLine }) {
    const { lines } = useLines();
    const { isEdit } = lines[i]
    const lineData = lines[i]
    console.log(lineData)
    return (
        <li className="mobile-line">
            {isEdit ?
                <>

                    <MobileLineForm line={lineData} i={i} updateLine={updateLine} />

                </>
                :
                <>
                    <MobileLineDetailsComp line={lineData} />
                </>
            }
            <button onClick={toggleEdit}>EDIT</button>
        </li>
    )
}