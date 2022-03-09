import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
// import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink, logo } from "./navigation.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export function Navigation({ className }) {
  // const {
  //   allShopifyProduct: { productTypes },
  // } = useStaticQuery(graphql`
  //   query {
  //     allShopifyProduct {
  //       productTypes: distinct(field: productType)
  //     }
  //   }
  // `)

  const navigationQuery = graphql`
    {
      allPrismicNavigation {
        nodes {
          data {
            navigation_links {
              label
              link {
                uid
              }
            }
            logo {
              gatsbyImageData
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={`${navigationQuery}`}
      render={(data) => {
        return (
          <nav className={[navStyle, className].join(" ")}>
            {data.allPrismicNavigation.nodes.map(({ data }) => {
              return (
                <>
                  <div className={logo}>
                    <Link to="/">
                      <GatsbyImage alt="" image={data.logo.gatsbyImageData} />
                    </Link>
                  </div>
                  <nav className={[navStyle, className].join(" ")}>
                    {data.navigation_links.map((data) => {
                      // console.log(data)
                      return (
                        <div key={data.link.uid}>
                          <Link
                            to={`/${data.link.uid}`}
                            className={navLink}
                            activeClassName={activeLink}
                          >
                            {data.label}
                          </Link>
                        </div>
                      )
                    })}
                  </nav>
                </>
              )
            })}
          </nav>
        )
      }}
    />
  )
}
