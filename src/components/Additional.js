import React from 'react'
import '../styles/App.css';
import '../styles/print.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Additional({ start, stop, edit, data }) {

    const { isEdit, repName, repContact, additionalNotes } = data;

    return (
        <>
            {isEdit ?
                <>
                    <div className="rep-info">
                        <div>
                        <label htmlFor="rep-name">Representative: </label>
                        <input type="text" onChange={(e) => { edit('repName', e.target.value) }} value={repName} name="rep-name" />
                        </div>
                        <div>
                        <label htmlFor="rep-contact">Contact: </label>
                        <input type="text" onChange={(e) => { edit('repContact', e.target.value) }} value={repContact} name="rep-contact" />
                        </div>
                    </div>
                    <div className="additional-notes">
                    <label htmlFor="additional-notes">Additional Notes: </label>
                    <textarea onChange={(e) => { edit('additionalNotes', e.target.value) }} value={additionalNotes} name="additional-notes" />
                    <button onClick={stop}><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </>
                :
                <>
                    <div className="rep-info">
                        <h3>Representative: <span>{repName}</span></h3>
                        {repContact && <h3>Contact: <span>{repContact}</span></h3>}
                    </div>
                    {additionalNotes && <div className="additional-notes">
                        <h3>Additional Notes:</h3>
                        <p>{additionalNotes}</p>
                    </div>}
                    <button onClick={start}><FontAwesomeIcon icon={faPenToSquare} /></button>
                </>
            }
        </>
    )
}