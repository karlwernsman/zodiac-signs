import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <img src={`zodiacs/${props.image}.png`} />
      <h2>{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}
