import React from 'react';
import './Main.css';
import ZodiacCard from '../Zodiac/Zodiac.js';
import { zodiacs } from '../../data.js';
import background from '../../shadesofwhite.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.id} image={zodiac.name} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  );
}
