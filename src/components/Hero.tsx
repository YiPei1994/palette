import { useAccentColor, useSecondaryColor } from '../store/ColorPaletteStore';

function Hero() {
  const { secondaryColor } = useSecondaryColor();
  const { accentColor } = useAccentColor();
  return (
    <div className="m-auto mb-10 flex h-[40vh] w-4/5 flex-col gap-4 pt-28">
      <h1
        style={{ color: secondaryColor }}
        className=" flex flex-col items-center justify-center gap-4  text-center text-4xl uppercase"
      >
        let`s discover <p className="lowercase">the magic of</p>
        <p>
          {' '}
          60 <span style={{ color: accentColor }}>/</span> 30{' '}
          <span style={{ color: accentColor }}>/</span> 10
        </p>
      </h1>
      <p style={{ color: accentColor }} className="font-bold">
        New color palette rule:{' '}
        <span style={{ color: secondaryColor }}>60% </span> primary,{' '}
        <span style={{ color: secondaryColor }}>30% </span> secondary,{' '}
        <span style={{ color: secondaryColor }}> 10% </span>accent.
      </p>
    </div>
  );
}

export default Hero;
