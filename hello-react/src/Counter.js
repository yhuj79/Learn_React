import { Component } from "react";

class Counter extends Component {
    state = {
        num: 0,
    };
    render() {
        const { num } = this.state;
        return (
            <div style={{ padding: '30px' }}>
                <h1>{num}</h1>
                <button
                    onClick={() => {
                        this.setState(
                            {
                                num: num + 1
                            },
                            () => {
                                alert('Plus One!');
                            }
                        )
                    }}
                >
                    Plus One
                </button>
            </div>
        );
    }
}
export default Counter;