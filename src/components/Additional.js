import React from 'react'
import '../styles/App.css';
import '../styles/print.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Additional({ start, stop, edit, data }) {

    const { isEdit, repName, repContact, additionalNotes } = data;

    return (
        <div className="additional-info">
            {isEdit ?
                <div className="additional-info-form">
                    <div className="rep-info-form">
                        <div className="rep-name">
                            <label htmlFor="rep-name">Representative: </label>
                            <input type="text" onChange={(e) => { edit('repName', e.target.value) }} value={repName} name="rep-name" />
                        </div>
                        <div className="rep-contact">
                            <label htmlFor="rep-contact">Contact: </label>
                            <input type="text" onChange={(e) => { edit('repContact', e.target.value) }} value={repContact} name="rep-contact" />
                        </div>
                    </div>
                    <div className="additional-notes-form">
                        <label htmlFor="additional-notes">Additional Notes: </label>
                        <textarea onChange={(e) => { edit('additionalNotes', e.target.value) }} value={additionalNotes} name="additional-notes" />
                    </div>
                    <button onClick={stop}><FontAwesomeIcon icon={faCheck} /></button>
                </div>
                :
                <div className="additional-info-details">
                    <div className="rep-info-details">
                        <h3>Representative: {repName}</h3>
                        {repContact && <h3>Contact: {repContact}</h3>}
                    </div>
                   {additionalNotes && <div className="additional-notes-details">
                        <h3>Additional Notes:</h3>
                        <p>{additionalNotes}</p> 
                    </div> }
                    <button onClick={start}><FontAwesomeIcon icon={faPenToSquare} /></button>
                </div>
            }
        </div>
    )
}