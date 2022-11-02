import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
