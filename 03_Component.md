# :two:[ JSX](https://github.com/yhuj79/Learn_REACT/blob/main/03_Component.md)
<div align="left"><a href='https://github.com/yhuj79/Learn_REACT/blob/main/02_JSX.md'><<:one:PREV (main)</a></div>
<!--<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/main/04_???'>:three:NEXT (Component) >></a></div>-->

## 1 ) Component, Props (default, type)

src에 MyComponent.js 생성

```javascript
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
```

App.js 수정

```javascript
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent /* name='yhuj79' */ favoriteNumber={3}>React!</MyComponent>;
};

export default App;
```

다음과 같이 출력된다.

<img width=400 src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/03_Component_1.PNG>