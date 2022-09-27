import { Component } from 'react';
import IterationSample from "./IterationSample";
import MapTest from './MapTest';
import Operator from './Operator';
import Prac from './Prac_1';

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <IterationSample />
        <Operator />
        <Prac />
        <MapTest />
      </div>
    )
  }
}
export default App;