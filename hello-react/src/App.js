import { Component } from 'react';
import IterationSample from "./IterationSample";
import Operator from './Operator';

class App extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <IterationSample />
        <Operator />
      </div>
    )
  }
}
export default App;