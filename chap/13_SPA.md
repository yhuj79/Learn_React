# :one::three:[ SPA](https://github.com/yhuj79/Learn_React/blob/master/chap/13_SPA.md)

<div align="left"><a href='https://github.com/yhuj79/Learn_React/blob/master/chap/09_Styling.md'><<:nine:PREV (Styling)</a></div>
<div align="right"><a href='https://github.com/yhuj79/Learn_REACT/blob/master/chap/15_ContextAPI.md'>:one::five:NEXT (Context API) >></a></div>

## 1 ) 라우터 적용

디렉터리에 yarn add react-router-dom 후

src/index.js 에 BrowserRouter 컴포넌트를 사용

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Home과 About 페이지 생성 후 Route 컴포넌트로 연결

```javascript
const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
    </div>
  );
};
export default Home;
```

```javascript
const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
    </div>
  );
};
export default About;
```

```javascript
import { Route, Link, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
export default App;
```

## 2 ) URL 파라미터

```javascript
import { Route, Link, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/paramData1">React</Link>
        </li>
        <li>
          <Link to="/profile/paramData2">Node.js</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};
export default App;
```

```javascript
import { useParams } from "react-router-dom";

const data = {
  paramData1: {
    name: "React",
    description:
      "리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.",
  },
  paramData2: {
    name: "Node.js",
    description:
      "Node.js는 확장성 있는 네트워크 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다.",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Profile.js</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p style={{ width: "80%" }}>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```

<img src=https://raw.githubusercontent.com/yhuj79/Learn_React/main/md_image/13_SPA_1.gif>

# V6 업데이트로 인해 바뀐 점이 많음.

NavLink activeStyle, activeClassName 사라짐

다음과 같이 적용해 보았음

```javascript
const NavStyle = ({ isActive }) =>
    ({
        ~~~
    })

    return (
        <div>
            <NavLink to="/" style={NavStyle}>Home</NavLink>
            </div>
```

exact가 사라짐, /* 로 지정

Switch => Routes, useHistory => useNavigate

Route는 Routes의 직속 자식이어야 함
