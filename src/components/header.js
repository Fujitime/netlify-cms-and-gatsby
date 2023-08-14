import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-slate-950 py-4 px-8 flex items-center justify-between mb-10">
    <Link
      to="/"
      className="text-white text-xl font-semibold no-underline"
    >
      {siteTitle}
    </Link>
    <img
      alt="Gatsby logo"
      width={50}
      style={{ margin: 0 }}
      src="https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png"
/>
  </header>
)

export default Header
