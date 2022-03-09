import React from "react"
import CallToActionGrid from "./callToActionGrid"
import Hero from "./hero"
import { RichText } from "prismic-reactjs"
import { GatsbyImage } from "gatsby-plugin-image"
import { aboutAuthor, p0, pr0, pl15 } from "../pages/index.module.css"

const SliceZone = ({ data }) => {
  console.log("slice data", data)
  return (
    <>
      <div className="container">
        <div className="row">
          {data.body.map((content, index) => {
            if (content.slice_type === "hero") {
              return (
                <div className="col-md-12" key={index}>
                  <Hero
                    title={content.primary.hero_title.text}
                    backgroundImage={content.primary.hero_image.url}
                  />
                </div>
              )
            } else if (content.slice_type === "call_to_action") {
              return (
                <div className={`col-md-8 ${p0}`} key={index}>
                  <div className="row">
                    <CallToActionGrid callToActions={content.items} />
                  </div>
                </div>
              )
            } else if (content.slice_type === "single_testimonial") {
              return (
                <div className={`col-md-4 ${aboutAuthor} ${pr0}`} key={index}>
                  <div className="col-md-3">
                    <GatsbyImage
                      alt=""
                      image={content.items[0].testimonial_image.gatsbyImageData}
                    />
                  </div>
                  <div className={`col-md-9 ${pl15}`}>
                    <RichText
                      render={content.items[0].testimonial_content.richText}
                    />
                  </div>
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      </div>
    </>
  )
}

export default SliceZone
