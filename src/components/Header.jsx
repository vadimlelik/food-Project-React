import {Link} from 'react-router-dom';

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/vadimlelik/food-project"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
          <li>
            <Link to="/сontact">Contact</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
