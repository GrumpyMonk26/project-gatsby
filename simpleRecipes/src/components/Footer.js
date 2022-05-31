import React from "react"

export default function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span>SimpleRecipes</span>. built with{" "}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
  )
}
