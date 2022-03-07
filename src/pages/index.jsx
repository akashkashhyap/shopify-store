import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import SliceZone from "../components/slice-zone"
import { ProductListing } from "../components/product-listing"
// import {
//   container,
//   intro,
//   callOut,
//   callToAction,
//   deployButton,
// } from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
    allPrismicHomepage {
      edges {
        node {
          data {
            body {
              ... on PrismicHomepageDataBodyHero {
                id
                slice_type
                primary {
                  hero_title {
                    text
                  }
                  hero_image {
                    url
                  }
                }
              }
              ... on PrismicHomepageDataBodyCallToAction {
                id
                slice_type
                items {
                  featured_image {
                    gatsbyImageData
                  }
                  title {
                    text
                  }
                  tag
                  action_link {
                    uid
                  }
                  content {
                    richText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
`

export default function IndexPage({ data }) {
  // console.log(data);
  return (
    <Layout>
      <SliceZone data={data.allPrismicHomepage.edges[0].node.data} />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
