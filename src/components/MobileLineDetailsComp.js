import React from 'react';

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
        <>
            <h3>Name: {name}</h3>
            <h4>Number: {phoneNumber}</h4>
            <p>{lineType}</p>
            <p>{isBYOD}</p>
            <p>{newDevice}</p>
            <p>{newDeviceCost}</p>
            <p>{inFull}</p>
            <p>{lineDiscount}</p>
            <p>{deviceDiscount}</p>
            <p>{note}</p>
        </>
    )
}