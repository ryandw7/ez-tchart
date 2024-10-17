import React from 'react';
import MobileLine from './MobileLine';
import useLines, { linesObj } from '../../context/MobileContext';
import '../../styles/App.css'
import styles from './Mobile.module.css'
export default function Mobile() {


    const { lines, setLines } = useLines();

    const addLine = (e) => {
        e.preventDefault();
        setLines((prev) => {
            return [...prev, linesObj]
        })
    }

    const toggleEdit = (e, i) => {
        const { isEdit } = lines[i]
        e.preventDefault();
        if (isEdit === true) {
            setLines(prev => {
                const newArr = prev.toSpliced(i, 1, {
                    ...lines[i],
                    isEdit: false
                })
                return newArr;
            })
        } else if (isEdit === false) {
            setLines(prev => {
                const newArr = prev.toSpliced(i, 1, {
                    ...lines[i],
                    isEdit: true
                })
                return newArr
            })
        }
    }

    const updateLine = (i, key, value) => {
        setLines((prev) => {
            return prev.toSpliced(i, 1, {
                ...lines[i],
                [key]: value
            })
        })
    }

    return (

        <div id={styles.mobile}>
            <ul className={styles.linesList}>
                {
                    lines.map((item, index) => <MobileLine key={index} lineData={item} i={index} toggleEdit={(event) => toggleEdit(event, index)} updateLine={updateLine} />)
                }
            </ul>
            <button className={styles.addLineButton} onClick={addLine}>+</button>
        </div>

    )
}

