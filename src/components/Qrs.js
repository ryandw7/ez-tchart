import React from 'react';
import fillerQr from '../data/qrs/fillerQr.png'
export default function Qrs() {
    return (
        <div className="qrs">
            <img alt="qr" src={fillerQr} width="75" height="75"></img>
            <img alt="qr" src={fillerQr} width="75" height="75"></img>
            <img alt="qr" src={fillerQr} width="75" height="75"></img>
            <img alt="qr" src={fillerQr} width="75" height="75"></img>
            <img alt="qr" src={fillerQr} width="75" height="75"></img>
        </div>
    )
}