import React from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simple recipes" />
          </Link>
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
          >
            Recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            Tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
        </div>
      </div>
    </nav>
    // <nav>
    //   <FiAlignJustify />
    //   <img src="" alt="Logo" />
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //     <li>
    //       <Link to="/recipes">Recipes</Link>
    //     </li>
    //     <li>
    //       <Link to="/tags">Tags</Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}
