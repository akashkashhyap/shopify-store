import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicBlogs {
        nodes {
          uid
          first_publication_date(formatString: "YYYY-MM-DD")
          data {
            author
            blog_title {
              text
            }
            blog_image {
              gatsbyImageData
              alt
            }
            tags
          }
        }
      }
    }
  `)

  return (
    <div className="row">
      {data.allPrismicBlogs.nodes.map((blog, index) => {
        return (
          <div className="col-md-4">
            <article className="blogCard" key={index}>
              <GatsbyImage
                alt=""
                image={blog.data.blog_image.gatsbyImageData}
              />
              <h2 className="blogTitle">{blog.data.blog_title.text}</h2>
              <p>{blog.data.author}</p>
              <Link to={`${blog.uid}`}>Read More</Link>
            </article>
          </div>
        )
      })}
    </div>
  )
}

export default Blog
