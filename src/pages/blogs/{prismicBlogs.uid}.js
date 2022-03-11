import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { RichText } from "prismic-reactjs"
import Seo from "../../components/seo"

export const query = graphql`
  query getBlog($id: String) {
    prismicBlogs(id: { eq: $id }) {
      uid
      id
      first_publication_date
      last_publication_date
      data {
        blog_title {
          text
        }
        article {
          richText
          text
        }
        author
        blog_image {
          gatsbyImageData
          url
        }
      }
    }
  }
`
const Blog = ({ data }) => {
  // console.log("????", data.prismicBlogs)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    articleBody: data.prismicBlogs.data.article.text,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://shopifystoremain.gatsbyjs.io/",
    },
    headline: data.prismicBlogs.data.blog_title.text,
    datePublished: data.prismicBlogs.last_publication_date,
    dateCreated: data.prismicBlogs.first_publication_date,
    "author": {
      "@type": "Person",
      "name": data.prismicBlogs.data.author
    },
    publisher: {
      '@type': 'Organization',
      name: "Fuelorganics",
      logo: {
        '@type': 'ImageObject',
        url: data.prismicBlogs.data.blog_image.url,
      },
    },

  }
  return (
    <Layout>
      <Seo
        schemaMarkup={schema}
        title={data.prismicBlogs.data.blog_title.text}
        description={
          data.prismicBlogs.data.article.text
        }
      />
      <div className="container">
        <article className="singleBlog">
          <h1 className="singleBlog-title">
            {data.prismicBlogs.data.blog_title.text}
          </h1>
          <p>By: {data.prismicBlogs.data.author}</p>
          <GatsbyImage
            alt=""
            image={data.prismicBlogs.data.blog_image.gatsbyImageData}
          />
          <RichText render={data.prismicBlogs.data.article.richText} />
        </article>
      </div>
    </Layout>
  )
}

export default Blog
