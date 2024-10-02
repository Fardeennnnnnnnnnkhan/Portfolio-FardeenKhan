import React from 'react';
import { technologies } from '../constants'; // Ensure the correct path
import { SectionWrapper } from '../hoc';
import {BallCanvas} from './canvas'; // Make sure to import BallCanvas

function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* Pass the icon to BallCanvas */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, 'tech');
