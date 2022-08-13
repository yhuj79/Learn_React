import logo from 'logo.svg';
import "components/common/Header.scss";

function Header() {
    return (
        <header className="header">
        <img src={logo} className="header-logo" alt="" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    );
}

export default Header;