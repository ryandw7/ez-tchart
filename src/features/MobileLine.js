import React, { createContext, useContext, useState } from 'react';

import MobileLineDetailsComp from '../components/MobileLineDetailsComp';
import MobileLineForm from '../components/MobileLineForm';
import useLines from '../context/MobileContext';
export default function MobileLine({ lineData, i }) {
    const { lines, setLines } = useLines();
    const { isEdit } = lines[i]
    const handleEdit = (e) => {
        e.preventDefault();
        if (isEdit === true) {
            console.log('is edit: true')
            setLines(prev => {
                const newArr = prev.toSpliced(i, 1, {
                    ...lineData,
                    isEdit: false
                })
                return newArr;
            })
        }else if(isEdit === false){
            console.log('is edit: false')
            console.log(i)
            setLines(prev => {
                const newArr = prev.toSpliced(i, 1, {
                    ...lineData,
                    isEdit: true
                })
                console.log(newArr)
                return newArr
            })
               
            }
        }

    

    return (
        <li>
            {isEdit ?
                <>

                    <MobileLineForm lineData={lineData} i={i} />

                </>
                :
                <>
                    <MobileLineDetailsComp lineData={lineData} />
                    <button onClick={handleEdit}>EDIT</button>
                </>
            }
        </li>
    )
}