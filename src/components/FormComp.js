import React from 'react';
import { dollarValueCheck } from '../utils';
import '../styles/App.css';
import '../styles/print.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function FormComp({ edit, bundle, done }) {
    const { internet, mobile, entertainment } = bundle;

    const changeInput = (e) => {
        let { name, value } = e.target;
        e.preventDefault();
       
        if (name === "internet-cost" || name === "internet-notes") {
            let obj = { cost: internet.cost, notes: internet.notes }
            if (name === "internet-cost") {
                if (dollarValueCheck(value) !== false) {
                    obj = {
                        ...obj,
                        cost: dollarValueCheck(value) 
                    }
                }
            } else if (name === "internet-notes") {
                console.log('notes')
                obj = { ...obj, notes: value }
            }

            edit('internet', obj)

        } else if (name === "mobile-cost" || name === "mobile-notes") {

            let obj = { cost: mobile.cost, notes: mobile.notes };

            if (name === "mobile-cost" && dollarValueCheck(value)) {
                obj = {
                    ...obj,
                    cost: dollarValueCheck(value)
                }

            };
            if (name === "mobile-notes") {
                obj = {
                    ...obj,
                    notes: value
                }
            }
            edit('mobile', obj)

        } else if (name === "entertainment-cost" || name === "entertainment-notes") {
            console.log(name, value)
            let obj = { cost: entertainment.cost, notes: entertainment.notes };

            if (name === "entertainment-cost" && dollarValueCheck(value)) {
                obj = {
                    ...obj,
                    cost: dollarValueCheck(value)
                }

            } else if (name === "entertainment-notes") {
                obj = {
                    ...obj,
                    notes: value
                }
            }
            edit('entertainment', obj)
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        done()
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
           <div className="form-section">
                <h3>Internet</h3>
                <label htmlFor="internet-cost">Cost: </label>
                <input name="internet-cost" type="number" value={internet.cost ? internet.cost : ''} onChange={changeInput}></input>
                <br></br>
                <label htmlFor="internet-notes">Notes: </label>
                <textarea onChange={changeInput} name="internet-notes" value={internet.notes}></textarea>
                </div>
                <div className="form-section">
                <h3>Mobile</h3>
                <label htmlFor="mobile-cost">Cost: </label>
                <input name="mobile-cost" type="number" value={mobile.cost ? mobile.cost : ''} onChange={changeInput}></input>
                <br></br>
                <label htmlFor="mobile-notes">Notes: </label>
                <textarea onChange={changeInput} name="mobile-notes" value={mobile.notes}></textarea>
            </div>
            <div className="form-section">
                <h3>Entertainment</h3>
                <label htmlFor="entertainment-cost">Cost: </label>
                <input name="entertainment-cost" type="number" value={entertainment.cost ? entertainment.cost : ''} onChange={changeInput}></input>
                <br></br>
                <label htmlFor="entertainment-notes">Notes: </label>
                <textarea onChange={changeInput} name="entertainment-notes" value={entertainment.notes}></textarea>
            </div>
            <button type="submit" className="submit-button"><FontAwesomeIcon icon={faCheck} /></button>
        </form>
    )
}