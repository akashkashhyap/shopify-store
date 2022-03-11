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
      allPrismicBlogpage {
        nodes {
          data {
            blog_title {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <div className="row">
      <div className="col-md-12">
        {data.allPrismicBlogpage.nodes.map((blogpage,index)=> {
          return (
            <h1 key={index}>{blogpage.data.blog_title.text}</h1>
          )
        })}
      </div>

      {data.allPrismicBlogs.nodes.map((blog, index) => {
        // console.log(blog);
        return (
          <div className="col-md-4" key={index}>
            <article className="blogCard">
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
