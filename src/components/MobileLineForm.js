import React from 'react';

export default function MobileLineForm({ line, i, updateLine }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateLine(i, name, value)
    }

    const handleToggle = (e) => {
        e.preventDefault();
        const { name } = e.target;
        console.log(line['name'])
        if (line[name] === true) {
            updateLine(i, name, false)
        } else if (line[name] === false) {
            updateLine(i, name, true)
        }
    }

    return (
        <>
            <label htmlFor="name">Name: </label>
            <input name="name" value={line.name} onChange={handleChange}></input>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input name="phoneNumber" value={line.phoneNumber} onChange={handleChange}></input>
            <button name="isBYOD" onClick={handleToggle}>BYOD</button>
            <select name="lineType" id="line-type" onChange={handleChange}>
                <option value="select">select</option>
                <option value="gig">By the Gig</option>
                <option value="unl">Unlimited</option>
                <option value="unl-pre">Unlimited Premium</option>
            </select>
            {!line.isBYOD &&
                <>
                    <label htmlFor="newDevice">New Device</label>
                    <input name="newDevice" value={line.newDevice} onChange={handleChange}></input>
                    <button name="inFull" onClick={handleToggle}>Pay in Full</button>
                    {!line.inFull &&
                        <>
                            <input name="deviceDiscount" type="number" value={line.deviceDiscount}></input>
                        </>
                    }
                </>
            }
        </>
    )
}