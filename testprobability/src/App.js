import logo from './logo.svg';
import './App.css';
import './Result';
import TotyNormal from './TotyNormal';
import TotyReinforce from './TotyReinforce';
import Icon from './Icon';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App_card">
        <TotyNormal />
        <TotyReinforce />
        <Icon />
      </div>
    </div>
  );
}
export default App;
