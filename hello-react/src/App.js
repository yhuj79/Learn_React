import { Component } from 'react';
import IterationSample from "./IterationSample";
import Operator from './Operator';
import Prac from './Prac_1';

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <IterationSample />
        <Operator />
        <Prac />
      </div>
    )
  }
}
export default App;