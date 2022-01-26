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
    }
    render() {
        return (
            <div style={{ padding: '30px' }}>
                <input
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'sucess' : 'failure') : ''}
                />
                <button onClick={this.handButtonClick}>비밀번호 확인</button>
                {this.state.clicked ? (this.state.validated ?
                    <p id="sucess">비밀번호가 일치합니다.</p> :
                    <p id="failure">비밀번호가 일치하지 않습니다.</p>
                ) : ''}
            </div>
        )
    }
}
export default ValidationSample;