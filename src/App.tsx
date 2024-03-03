import ColorAssociations from './components/ColorAssociations';
import Hero from './components/Hero';
import Palette from './components/Palette';

import { usePrimaryColor, useSecondaryColor } from './store/ColorPaletteStore';

function App() {
  const { primaryColor } = usePrimaryColor();
  const { secondaryColor } = useSecondaryColor();
  return (
    <main
      style={{
        backgroundColor: primaryColor,
        color: secondaryColor,
      }}
      className="min-h-screen w-full"
    >
      <Palette />
      <Hero />
      <ColorAssociations />
    </main>
  );
}

export default App;
