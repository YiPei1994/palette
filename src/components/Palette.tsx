import React from 'react';
import Color from './Color';
import { BsArrowDownSquareFill } from 'react-icons/bs';
import {
  useAccentColor,
  useDisplayPalette,
  usePrimaryColor,
} from '../store/ColorPaletteStore';
import { motion } from 'framer-motion';

function Palette() {
  const { accentColor } = useAccentColor();
  const { primaryColor } = usePrimaryColor();
  const { displayPalette, toggleDisplayPalette } = useDisplayPalette();
  return (
    <div
      className={`fixed top-0 z-40 flex  w-full flex-col items-center justify-center pt-4 transition-all duration-300 ${displayPalette ? ' max-h-[300px] ' : ' max-h-0 '} `}
      style={{ backgroundColor: primaryColor }}
    >
      <div
        className={`flex w-full gap-4  px-4 ${displayPalette ? ' pointer-events-auto opacity-100' : 'pointer-events-none  opacity-0'}`}
      >
        <Color type="primary">Primary:</Color>
        <Color type="secondary">secondary:</Color>
        <Color type="accent">Accent:</Color>
      </div>
      <motion.button
        className="z-40 mt-4 flex w-auto items-center justify-center "
        onClick={toggleDisplayPalette}
        initial={{ y: 0 }}
        animate={{ y: displayPalette ? 15 : 0 }}
        transition={{ repeat: displayPalette ? 0 : Infinity, duration: 2 }}
        style={{ backgroundColor: primaryColor }}
      >
        <BsArrowDownSquareFill
          className="bg-transparent text-2xl"
          style={{ color: accentColor }}
        />
      </motion.button>
    </div>
  );
}

export default Palette;
