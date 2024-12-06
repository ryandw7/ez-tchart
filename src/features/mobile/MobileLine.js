import React from 'react';
import styles from './Mobile.module.css'
import MobileLineDetailsComp from '../../components/mobileLineDetails/MobileLineDetailsComp';
import MobileLineForm from '../../components/mobileLineForm/MobileLineForm';
import useLines from '../../context/MobileContext';
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function MobileLine({ i, toggleEdit, updateLine }) {
    const { lines } = useLines();
    const { isEdit } = lines[i]
    const lineData = lines[i]
    console.log(lineData)
    return (
        <div className={styles.mobileLine}>
            <button onClick={toggleEdit} className={styles.editButton}>{isEdit ? <FontAwesomeIcon icon={faCheck} /> :
                <FontAwesomeIcon icon={faPenToSquare} />
            }
            </button>
            {isEdit ?
                <>

                    <MobileLineForm line={lineData} i={i} updateLine={updateLine} />

                </>
                :
                <>
                    <MobileLineDetailsComp line={lineData} />
                </>
            }

        </div>
    )
}