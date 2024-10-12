import React, { useState, useContext } from 'react';
import { EditContext } from '../features/MobileLine';
import useLines from '../context/MobileContext';
export default function MobileLineForm({ lineData, i }) {
    const { lines, setLines } = useLines();
    const [ formData, setFormData ] = useState(
        {   
            isEdit : lineData.isEdit || true,
            name: lineData.name || '',
            phoneNumber: lineData.phoneNumber || '',
            lineType: lineData.lineType || '',
            isBYOD: lineData.isBYOD || true,
            newDevice: lineData.newDevice || '',
            newDeviceCost: lineData.newDeviceCost || 0,
            inFull: lineData.inFull || false,
            lineDiscount: lineData.lineDiscount || 0,
            deviceDiscount: lineData.deviceDiscount || 0,
            note: lineData.note || ''
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleToggle = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        if (value === true) {
            setFormData((prev) => {
                return {
                    ...prev,
                    [name]: false
                }
            })
        } else if (value === false) {
            setFormData((prev) => {
                return {
                    ...prev,
                    [name]: true
                }
            })
        }
    }
 
   const handleSubmit = (e) => {
    e.preventDefault();
    setLines((prev)=>{
        const newArr = prev.splice(i, 1, {
            ...formData,
            isEdit: false
        })
        return newArr
    })
   
   }
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input name="name" value={formData.name} onChange={handleChange}></input>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}></input>
                <button name="isBYOD" value={formData.isBYOD} onClick={handleToggle}>BYOD</button>
                <select name="lineType" id="line-type" onChange={handleChange}>
                    <option value="select">select</option>
                    <option value="gig">By the Gig</option>
                    <option value="unl">Unlimited</option>
                    <option value="unl-pre">Unlimited Premium</option>
                </select>
                {!formData.isBYOD &&
                    <>
                        <label htmlFor="newDevice">New Device</label>
                        <input name="newDevice" value={formData.newDevice} onChange={handleChange}></input>
                        <input name="inFull" value={formData.inFull} onChange={handleToggle}></input>
                        {!formData.inFull &&
                            <>
                                <input name="deviceDiscount" type="number" value={formData.deviceDiscount}></input>
                            </>
                        }
                    </>
                }
                <input type="submit"></input>
            </form>
        )
    }