import React from 'react';
import '../styles/print.css';
import '../styles/App.css'
import broadbandLabels from '../data/qrs/broadband-labels.png';
import rewards from '../data/qrs/rewards.png';
import xmCalc from '../data/qrs/xm-calculator.png';
import xfinityApp from '../data/qrs/xfinity-app.png';
import channels from '../data/qrs/channels.png';
import bookAppointment from '../data/qrs/book-appointment.png';

export default function Qrs() {
    return (
        <div className="qrs">
            <div className="qr">
            <img alt="qr" src={broadbandLabels} width="75" height="75"></img>
            <p>FCC Broadband Labels</p>
            </div>
            <div className="qr">
            <img alt="qr" src={rewards} width="75" height="75"></img>
            <p>Xfinity Rewards</p>
            </div>
            <div className="qr">
            <img alt="qr" src={xmCalc} width="75" height="75"></img>
            <p>Xfinity Mobile Calculator</p>
            </div>
            <div className="qr">
            <img alt="qr" src={xfinityApp} width="75" height="75"></img>
            <p>Xfinity App</p>
            </div>
            
            <div className="qr">
            <img alt="qr" src={channels} width="75" height="75"></img>
            <p>Xfinity Channels</p>
            </div>
            <div className="qr">
            <img alt="qr" src={bookAppointment} width="75" height="75"></img>
            <p>Book an Appointment</p>
            </div>
        </div>
    )
}