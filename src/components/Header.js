import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function Header() {
  return (
      <>
      <LoginButton />
      <LogoutButton />
    <header className='app-header'>
      <img src='logo512.png' alt='React logo' />
      <h1>The React Quiz</h1>
    </header>
      </>
  );
}

export default Header;