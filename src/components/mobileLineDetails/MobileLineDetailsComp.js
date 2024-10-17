import React from 'react';
import styles from './MobileLineDetails.module.css'
export default function MobileLineDetailsComp({ line }) {
    const { name,
        phoneNumber,
        lineType,
        isBYOD,
        newDevice,
        newDeviceCost,
        inFull,
        lineDiscount,
        deviceDiscount,
        note } = line;

    return (
        <div className={styles.mobileLineDetails}>
            <h3 className={styles.lineName}>{name ? name : 'Name: _________'}</h3>
            <h4 className={styles.lineNum}>Number: {phoneNumber}</h4>
            <p className={styles.lineType}>{lineType}</p>
            <p>{isBYOD ? 'BYOD' : 'New Device'}</p>
            <p>{newDevice}</p>
            <p>{newDeviceCost}</p>
            <p>{inFull}</p>
            <p>{lineDiscount}</p>
            <p>{deviceDiscount}</p>
            <p>{note}</p>
        </div>
    )
}