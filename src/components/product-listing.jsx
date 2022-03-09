import * as React from "react"
import { ProductCard } from "./product-card"
import { useStaticQuery, graphql } from "gatsby"
import { listingContainerStyle } from "./product-listing.module.css"

// To optimize LCP we mark the first product card as eager so the image gets loaded faster

export function ProductListing({ products = [] }) {
  const data = useStaticQuery(graphql`
    {
      allPrismicProducts {
        nodes {
          data {
            title {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="container">
        {data.allPrismicProducts.nodes.map((productpage, index) => {
          return <h1 key={index}>{productpage.data.title.text}</h1>
        })}
      </div>
      <div className={listingContainerStyle}>
        {products.map((p, index) => (
          <ProductCard product={p} key={p.id} eager={index === 0} />
        ))}
      </div>
    </>
  )
}
