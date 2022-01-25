import logo from './logo.svg';
import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'select_none'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>이름 : {name}<br />
                Children 값 : {children}<br />
                좋아하는 숫자 : {favoriteNumber}<br />
                <img src={logo} className="App-logo" alt="logo" /></div>
        );
    }
}
export default MyComponent;