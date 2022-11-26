import { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    }
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus();
    }
    render() {
        return (
            <div style={{ padding: '30px' }}>
                <h1>Password Check</h1>
                <input
                    ref={(ref) => this.input = ref}
                    type='password'
                    placeholder="Input Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'sucess' : 'failure') : ''}
                />
                <button onClick={this.handButtonClick}>Check</button>
                {this.state.clicked ? (this.state.validated ?
                    <p id="sucess">비밀번호가 일치합니다.</p> :
                    <p id="failure">비밀번호가 일치하지 않습니다.</p>
                ) : ''}
            </div>
        )
    }
}
export default ValidationSample;