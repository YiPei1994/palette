import Palette from './components/Palette';
import { usePrimaryColor } from './store/ColorPaletteStore';

function App() {
  const { primaryColor } = usePrimaryColor();
  /*   const {  secondaryColor } = useSecondaryColor(); */
  return (
    <main
      style={{
        backgroundColor: `#${primaryColor}`,
        /*  color: `#${secondaryColor}`, */
      }}
      className="min-h-screen"
    >
      <Palette />
    </main>
  );
}

export default App;
