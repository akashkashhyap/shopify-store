import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { RichText } from "prismic-reactjs"

export const query = graphql`
  query getBlog($slug: String) {
    prismicBlogs(uid: { eq: $slug }) {
      data {
        article {
          richText
        }
        author
        blog_image {
          gatsbyImageData
        }
        blog_title {
          text
        }
      }
      uid
    }
  }
`
const BlogTemplate = ({ data }) => {
  console.log(data.prismicBlogs)
  return (
    <Layout>
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

export default BlogTemplate
