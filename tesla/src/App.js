import './App.css';
import Header from './components/Header.js';
import Section from './components/Section.js';
import SelectCar from './components/SelectCar.js';
import SelectColor from './components/SelectColor.js';
import Total from './components/Total.js';
function App() {
  return (
    <div className="App">
      <Header />
      <SelectCar />
      <Section />
      <SelectColor />
      <Total />
    </div>
  );
}

export default App;
