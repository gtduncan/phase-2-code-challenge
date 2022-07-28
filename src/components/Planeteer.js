import React from "react";
import {useState} from 'react'

function Planeteer({id, name, fromUSA, born, bio, quote, pictureUrl, twitter}) {
  const [bioToggle, setBioToggle] = useState(true)
  // state for bios

  const currentTime = new Date()
  const year = currentTime.getFullYear()

  const toggle = () => {
    setBioToggle(!bioToggle)
  }
  // toggle function that sets bioToggle state to opposite

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text" onClick={toggle}>{bioToggle ? bio : quote}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>Age: {year-born} </p>
            <p>
              {
                fromUSA ? "USA-based" : "Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
