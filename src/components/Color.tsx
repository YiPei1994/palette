import React, { ReactNode } from 'react';
import { usePrimaryColor } from '../store/ColorPaletteStore';
import { GiPlainCircle } from 'react-icons/gi';

type ColorProps = {
  type: 'secondary' | 'accent' | 'primary';
  children: ReactNode;
};

function Color({ type, children }: ColorProps) {
  /*  const { secondaryColor, setSecondaryColor } = useSecondaryColor();
  const { accentColor, setAccentColor } = useAccentColor(); */
  const { primaryColor, setPrimaryColor } = usePrimaryColor();

  /*   if (type === 'secondary')
    return (
      <div className="flex w-1/3 flex-col items-center justify-center gap-2">
        <span style={{ color: `#${secondaryColor}` }}>{children}</span>
        <GiPlainCircle
          style={{ color: `#${secondaryColor}` }}
          className="text-2xl"
        />
        <div className="flex items-center gap-3">
          <span style={{ color: `#${secondaryColor}` }}>#</span>

          <input
            className="w-2/3 px-2"
            placeholder="#..."
            value={secondaryColor}
            type="text"
            style={{ border: `1px solid #${secondaryColor}` }}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </div>
      </div>
    );

  if (type === 'accent')
    return (
      <div className="flex w-1/3 flex-col items-center justify-center gap-2">
        <span style={{ color: `#${secondaryColor}` }}>{children}</span>
        <GiPlainCircle
          style={{ color: `#${accentColor}` }}
          className="text-2xl"
        />
        <div className="flex items-center gap-3">
          <span style={{ color: `#${secondaryColor}` }}>#</span>

          <input
            className="w-2/3 px-2"
            placeholder="#..."
            value={accentColor}
            type="text"
            style={{ border: `1px solid #${secondaryColor}` }}
            onChange={(e) => setAccentColor(e.target.value)}
          />
        </div>
      </div>
    ); */

  if (type === 'primary')
    return (
      <div className="flex w-1/3 flex-col items-center justify-center gap-2">
        <span style={{ color: `#${primaryColor}` }}>{children}</span>
        <GiPlainCircle
          style={{ color: `#${primaryColor}` }}
          className="text-2xl"
        />
        <div className="flex items-center gap-3">
          <span style={{ color: `#${primaryColor}` }}>#</span>

          <input
            className="w-2/3 px-2"
            placeholder="#..."
            value={primaryColor}
            type="text"
            style={{ border: `1px solid #${primaryColor}` }}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </div>
      </div>
    );
}

export default Color;
