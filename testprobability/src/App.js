import logo from './logo.svg';
import GameLogo from './image/GameLogo.png';
import './App.css';
import './Result';
import TotyNormal from './TotyNormal';
import TotyReinforce from './TotyReinforce';
import Icon from './Icon';

function App() {
  return (
    <div className="App">
      <div className="App_header">
        <img className="App_gamelogo" alt="" src={GameLogo} />
        <img className="App_react" alt="logo" src={logo} />
      </div>
      <div className="App_card">
        <TotyNormal />
        <TotyReinforce />
        <Icon />
      </div>
    </div>
  );
}
export default App;
