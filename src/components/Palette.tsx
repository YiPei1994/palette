import React from 'react';
import Color from './Color';
/* import { BsArrowDownSquareFill } from 'react-icons/bs'; */
import { useDisplayPalette } from '../store/ColorPaletteStore';

function Palette() {
  /*  const { accentColor } = useAccentColor(); */
  const { displayPalette, toggleDisplayPalette } = useDisplayPalette();
  return (
    <>
      <div
        className={`z-40 mb-8 flex gap-4 px-4  transition-all duration-300 ${displayPalette ? 'pointer-events-none max-h-0 py-0 opacity-0' : 'pointer-events-auto max-h-[300px] py-8 opacity-100'} `}
      >
        <Color type="primary">Primary:</Color>
        <Color type="secondary">secondary:</Color>
        <Color type="accent">Accent:</Color>
      </div>
      <button
        className="flex w-full items-center justify-center"
        onClick={toggleDisplayPalette}
      >
        {/*   <BsArrowDownSquareFill
          className="text-2xl"
          style={{ color: accentColor }}
        /> */}
      </button>
    </>
  );
}

export default Palette;
