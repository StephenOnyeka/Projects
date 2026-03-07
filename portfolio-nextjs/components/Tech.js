import React from 'react'
import { icons } from '@/constants'
import FadeUp from './FadeUp'

function Tech() {
  return (
    <FadeUp>
      <div
        id="Tech"
        className="px-6 md:px-12 h-full pt-12 md:max-w-4xl mx-auto"
      >
        <h1 className="text-2xl font-semibold mb-10 opacity-80 uppercase tracking-widest text-center">
          {/* Technologies & Tools */}
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-12 items-center justify-items-center flex-1">
          {icons.map((icon, index) => (
            <div
              className="text-4xl sm:text-5xl text-white transition-colors duration-300 transform hover:opacity-70"
              key={index}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}

export default Tech