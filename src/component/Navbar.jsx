import Logo from '../assets/react.png'
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <a className="navbar-brand" href="/#">
                <img src={Logo} alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
            </a>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallary">
                Gallary
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
