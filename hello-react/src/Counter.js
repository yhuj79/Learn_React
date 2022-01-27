import { Component } from "react";

class Counter extends Component {
    state = {
        num1: 0, num2: 0
    }

    render() {
        const { num1, num2 } = this.state;
        return (
            <div style={{ padding: "30px" }}>
                <h1>{num1}</h1>
                <button onClick={() => {
                    this.setState({ num1: num1 + 1 });
                }}>Press Up</button>
                <h1>{num2}</h1>
                <button onClick={() => {
                    this.setState({ num2: num2 - 1 });
                }}>Press Down</button>
            </div>
        )
    }
}
export default Counter;