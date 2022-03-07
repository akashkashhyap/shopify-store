import React from "react"
import { RichText } from "prismic-reactjs"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { featuredPosts } from "../pages/index.module.css"

const CallToAction = ({ title, content, featuredImage, actionlink }) => {
//   console.log("actionlink", actionlink)
  return (
    <div className={`col-md-4 ${featuredPosts}`}>
      <Link to={`/blogs/${actionlink}`}>
        <GatsbyImage alt="" image={featuredImage} />
        <h2>{title}</h2>
        <RichText render={content} />
      </Link>
    </div>
  )
}

export default CallToAction
