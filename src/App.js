import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/welcome/welcome';
import Goodbye from './components/goodbye/goodbye';
import ColoredText from './components/coloredText/coloredText';

function App() {
  const names = 'Dasha'
  return (
    <div className="App">
    <ColoredText/>
    </div>
  );
}

export default App;
