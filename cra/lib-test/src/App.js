import logo from "./logo.svg";
import "./App.css";
import ReactInputRange from "./components/ReactInputRange";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>lib test</p>
        <ReactInputRange />
      </header>
    </div>
  );
}

export default App;
