import React from 'react';
import styles from './MobileLineForm.module.css'
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
    const BYOD = line.isBYOD ? 'BYOD' : 'New Device'
    return (
        <li className={styles.mobileLineForm}>
            <div className={styles.formDiv} id={styles.form1}>
                <label htmlFor="name">Name: </label>
                <input name="name" value={line.name} onChange={handleChange}></input>
                <button name="isBYOD" onClick={handleToggle}>{BYOD}</button>
            </div>
            <div className={styles.formDiv} id={styles.form2}>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input name="phoneNumber" value={line.phoneNumber} onChange={handleChange}></input>
            </div>
            <div className={styles.formDiv} id={styles.form3}>
                <label htmlFor="lineType">Data Plan: </label>
                <select name="lineType" id="line-type" onChange={handleChange}>
                    <option value="select">select</option>
                    <option value="gig">By the Gig</option>
                    <option value="unl">Unlimited</option>
                    <option value="unl-pre">Unlimited Premium</option>
                </select>
            </div>
            <div className={styles.formDiv} id={styles.form4}>
                <label htmlFor="lineDiscount">Line Discount: </label>
                <input name="lineDiscount" value={line.lineDiscount} onChange={handleChange}/>
            </div>
            {line.lineDiscount &&
                <div className={styles.formDiv} id={styles.form5}>
                    <label htmlFor="lineDiscountDuration">Months</label>
                    <input name="lineDiscountDuration" value={line.lineDiscountDuration} onChange={handleChange}></input>
                </div>
            }

            {!line.isBYOD &&
                <>
                    <div className={styles.formDiv} id={styles.form6}>
                        <label htmlFor="newDevice">New Device</label>
                        <input name="newDevice" value={line.newDevice} onChange={handleChange}></input>
                        <button name="inFull" onClick={handleToggle}>Pay in Full</button>
                    </div>
                    {!line.inFull &&
                        <>
                            <div>

                            </div>
                            <div className={styles.formDiv} id={styles.form7}>
                                <label htmlFor="deviceDiscount">Device Discount: </label>
                                <input name="deviceDiscount" type="number" value={line.deviceDiscount} onChange={handleChange}></input>
                            </div>
                        </>
                    }
                </>
            }

        </li>
    )
}