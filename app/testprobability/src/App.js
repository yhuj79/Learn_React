import logo from './logo.svg';
import GameLogo from './image/GameLogo.png';
import './App.css';
import TotyNormal from './TotyNormal';
import TotyReinforce from './TotyReinforce';
import Icon from './Icon';

function App() {
  return (
    <div className="App">
      <div className="App_header">
        <img className="App_gamelogo" alt="" src={GameLogo} />
        <img className="App_react" alt="logo" src={logo} />
        <p className="App_release">22.04.01 기준가&emsp;/&emsp;Made by yhuj79</p> 
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
