import React, { ReactNode } from 'react';
import {
  useAccentColor,
  usePrimaryColor,
  useSecondaryColor,
} from '../store/ColorPaletteStore';
import { GiPlainCircle } from 'react-icons/gi';

type ColorProps = {
  type: 'secondary' | 'accent' | 'primary';
  children: ReactNode;
};

function Color({ type, children }: ColorProps) {
  const { secondaryColor, setSecondaryColor } = useSecondaryColor();
  const { accentColor, setAccentColor } = useAccentColor();
  const { primaryColor, setPrimaryColor } = usePrimaryColor();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (type === 'primary') {
      setPrimaryColor(e.target.value);
    }
    if (type === 'secondary') {
      setSecondaryColor(e.target.value);
    }
    if (type === 'accent') {
      setAccentColor(e.target.value);
    }
  }
  return (
    <div className="flex w-1/3 flex-col items-center justify-center gap-2">
      <span style={{ color: secondaryColor }}>{children}</span>
      <GiPlainCircle
        style={{
          color:
            type === 'primary'
              ? primaryColor
              : type === 'secondary'
                ? secondaryColor
                : accentColor,
        }}
        className="text-2xl"
      />
      <input
        className="w-2/3 px-1"
        placeholder="#..."
        value={
          type === 'primary'
            ? primaryColor
            : type === 'secondary'
              ? secondaryColor
              : accentColor
        }
        type="text"
        style={{
          border: `1px solid ${accentColor}`,
          color: primaryColor,
          backgroundColor: secondaryColor,
          outline: 'none',
        }}
        onChange={handleChange}
      />
    </div>
  );
}

export default Color;
