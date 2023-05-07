import logo from "./logo.svg";
import "./App.css";
import GoogleLoginButton from "./GoogleLoginButton";

function App() {
  function logout() {
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_name");
    window.localStorage.removeItem("user_img");
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {window.localStorage.getItem("user_email") === null ? (
          <GoogleLoginButton />
        ) : (
          <div>
            <h1>{window.localStorage.getItem("user_email")}</h1>
          </div>
        )}
        <button onClick={() => logout()}>로그아웃</button>
      </header>
    </div>
  );
}

export default App;
