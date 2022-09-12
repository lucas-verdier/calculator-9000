import logo from './logo.svg';
import './style/App.css';
import './components/TheTitle';
import TheTitle from "./components/TheTitle";
import Calculator from "./components/Calculator";


function App() {
  return (
    <div className="App">
      <TheTitle />
        <Calculator />
    </div>
  );
}

export default App;
