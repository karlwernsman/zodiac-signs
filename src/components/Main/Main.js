import React from 'react';
import './Main.css';
import ZodiacCard from '../Zodiac/Zodiac.js';
import { zodiacs } from '../../data.js';

export default function Main() {
  return (
    <main>
      {zodiacs.map((zodiac) => (
        <ZodiacCard key={zodiac.id} image={zodiac.name} name={zodiac.name} dates={zodiac.dates} />
      ))}
    </main>
  );
}
