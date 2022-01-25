import logo from './logo.svg';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
        <div>이름 : {name}<br />
            Children 값 : {children}<br />
            좋아하는 숫자 : {favoriteNumber}<br />
            <img src={logo} className="App-logo" alt="logo" /></div>
    );
};
MyComponent.defaultProps = {
    name: 'select_none'
};
MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent;