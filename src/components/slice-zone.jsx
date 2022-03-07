import React from "react"
import CallToActionGrid from "./callToActionGrid"
import Hero from "./hero"

const SliceZone = ({ data }) => {
  // console.log("data", data.body)
  return (
    <div className="container">
      {data.body.map((content, index) => {
        if (content.slice_type === "hero") {
          return (
            <Hero
              key={index}
              title={content.primary.hero_title.text}
              backgroundImage={content.primary.hero_image.url}
            />
          )
        } else if (content.slice_type === "call_to_action") {
          return (
            <div className="row" key={index}>
              <CallToActionGrid
                callToActions={content.items}
              />
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}

export default SliceZone
