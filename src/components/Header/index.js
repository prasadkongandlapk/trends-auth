import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="navbar">
    <img
      className="logo-img"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
      alt="website logo"
    />
    <ul className="nav-items">
      <Link to="/">
        <li className="hyperlinks">Home</li>
      </Link>
      <Link to="/">
        <li className="hyperlinks">Products</li>
      </Link>

      <Link to="/">
        <li className="hyperlinks">Cart</li>
      </Link>

      <Link to="/">
        <li className="hyperlinks1">Logout</li>
      </Link>
    </ul>
  </nav>
)

export default Header
