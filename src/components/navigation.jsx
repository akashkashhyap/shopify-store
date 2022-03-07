import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <>
      <nav className={[navStyle, className].join(" ")}>
        <Link to="/" className={navLink}>
          Home
        </Link>
        <Link to="/blogs" className={navLink}>
          Blogs
        </Link>
        <Link to="/about" className={navLink}>
          About
        </Link>

        <Link
          key="All"
          className={navLink}
          to="/products/"
          activeClassName={activeLink}
        >
          Shop
        </Link>

        {productTypes.map((name) => (
          <Link
            key={name}
            className={navLink}
            to={`/products/${slugify(name)}`}
            activeClassName={activeLink}
          >
            {name}
          </Link>
        ))}
      </nav>
    </>
  )
}
