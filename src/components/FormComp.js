import React from 'react';

export default function FormComp({ edit, bundle }) {
    const { internet, mobile, entertainment } = bundle;
    const changeInternet = (e) => {
        e.preventDefault();
        let obj = { cost: internet.cost, notes: internet.notes }
        if (e.target.name === "internet-cost") {
            console.log('cost edit')
            console.log(e.target.value)
           obj = { ...obj, cost: e.target.value }
           console.log(obj)
        } else if (e.target.name === "internet-notes") {
           obj = { ...obj, notes: e.target.value }
        }
        edit(internet, obj)
    }
    console.log()
    return (
        <div className="form">
            <section>
                <h3>Internet</h3>
                <label htmlFor="internet-cost">Cost: </label>
                <input name="internet-cost" type="number" value={internet.cost} onChange={changeInternet}></input>
                <label htmlFor="internet-notes">Notes: </label>
                <textarea></textarea>
            </section>
        </div>
    )
}