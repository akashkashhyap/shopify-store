import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import SliceZone from "../components/slice-zone"
import { Seo } from "../components/seo"

// import { ProductListing } from "../components/product-listing"
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
            title {
              text
            }
            description {
              text
            }
            body {
              ... on PrismicHomepageDataBodyImagesSlider {
                slice_type
                items {
                  image {
                    gatsbyImageData
                  }
                  description {
                    richText
                  }
                }
              }
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
              ... on PrismicHomepageDataBodySingleTestimonial {
                slice_type
                items {
                  testimonial_image {
                    gatsbyImageData
                  }
                  testimonial_content {
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fuelorganics",
    description: data.allPrismicHomepage.edges[0].node.data.description.text,
    url: "https://shopifystoremain.gatsbyjs.io/",
    logo: "",
  }
  return (
    <Layout>
      <Seo
        schemaMarkup={schema}
        title={data.allPrismicHomepage.edges[0].node.data.title.text}
        description={ data.allPrismicHomepage.edges[0].node.data.description.text }
      />
      <SliceZone data={data.allPrismicHomepage.edges[0].node.data} />
    </Layout>
  )
}
