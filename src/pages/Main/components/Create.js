import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Create() {
  const [duration,setDuration]=useState(1);
  return (
    <>
    <div className="container border border-2 p-3" style={{borderRadius:10, width:800}}>
        <div className="text-center">
        <h1>Create Trip</h1>
        </div>
        <div className="input-group mb-3 my-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">From</label>
        <select className="form-select" id="inputGroupSelect01">
            <option selected>Choose source</option>
            <option value="1">Chandigarh</option>
            <option value="2">Delhi</option>
            <option value="3">Gurgaon</option>
            <option value="4">Jalandhar</option>
            <option value="5">Ludhiana</option>
            <option value="6">Patiala</option>
            <option value="7">Bathinda</option>
            <option value="8">Barnala</option>
            <option value="9">Sangrur</option>
        </select>
        </div>

        <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Destination</label>
        <select className="form-select" id="inputGroupSelect01">
            <option selected>Choose destination</option>
            <option value="1">Chandigarh</option>
            <option value="2">Delhi</option>
            <option value="3">Gurgaon</option>
            <option value="4">Jalandhar</option>
            <option value="5">Ludhiana</option>
            <option value="6">Patiala</option>
            <option value="7">Bathinda</option>
            <option value="8">Barnala</option>
            <option value="9">Sangrur</option>
        </select>
        </div>
       
        <div className="input-group">
        <span className="input-group-text">   Date   </span>
        <input type="date" aria-label="First name" className="form-control"/>
 
        </div>

        <div className="input-group my-3 mb-3 border" style={{borderRadius:7}}>
        <span className="input-group-text"> Gender Preference </span>
        <div className="form-check form-check-inline my-3 mx-3">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineCheckbox1">Female</label>
        </div>
        <div className="form-check form-check-inline my-3">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
        <label className="form-check-label" htmlFor="inlineCheckbox2">Male</label>
        </div>
        </div>
        <div className="input-group my-3 mb-3 border" style={{ borderRadius: 7 }}>
        <span className="input-group-text">Duration</span>
        <input onChange={(event)=>setDuration(event.target.value)}
          type="range"
          className="form-range"
          min="1"
          max="30"
          step="1"
          id="durationRange"
        />
        <label htmlFor="durationRange" className="form-label mx-3">
          <span id="durationValue">{duration}</span> days
        </label>
      </div>
        <div className="text-center">
        <button type="button" class="btn btn-outline-success" onClick={()=>toast.success('Trip created successfully')}>Create</button>
        </div>
        

    </div>
    </>
  );
}
