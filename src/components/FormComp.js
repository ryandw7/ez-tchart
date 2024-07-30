import React from 'react';

export default function FormComp({edit, bundle}){
    const {internet, mobile, entertainment} = bundle;
    const changeInternet = (e) => {
        e.preventDefault();
        console.log(e.target)
    }
    return (
        <div className="form">
        <label htmlFor="internet-value">Internet: </label>
        <input ></input>
        </div>
    )
}