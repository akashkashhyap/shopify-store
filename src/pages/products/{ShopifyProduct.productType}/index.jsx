import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../../components/layout"
import { ProductListing } from "../../../components/product-listing"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../../../components/more-button"
import Seo from "../../../components/seo"
import { title } from "../index.module.css"

export default function ProductTypeIndex({
  data: { products, seos },
  pageContext: { productType },
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fuelorganics",
    description: seos.nodes[0].data.seo_description.text,
    url: "https://shopifystoremain.gatsbyjs.io/",
    logo: "",
  }
  return (
    <Layout>
      <Seo
        schemaMarkup={schema}
        title={seos.nodes[0].data.seo_title.text}
        description={seos.nodes[0].data.seo_description.text}
      />
      <h1 className={title}>{productType}</h1>
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search?p=${slugify(productType)}#more`}>
          More Products
        </MoreButton>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ($productType: String!) {
    products: allShopifyProduct(
      filter: { productType: { eq: $productType } }
      sort: { fields: publishedAt, order: ASC }
      limit: 24
    ) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
    seos: allPrismicProducts {
      nodes {
        data {
          seo_title {
            text
          }
          seo_description {
            text
          }
        }
      }
    }
  }
`
