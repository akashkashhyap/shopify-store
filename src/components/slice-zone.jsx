import React from "react"
import Hero from "./hero"
// import { container } from "../pages/index.module.css"

const SliceZone = ({ data }) => {
  console.log("data", data.body)
  return (
    <div className='container'>
      {data.body.map((content, index) => {
        return (
          <Hero
            key={index}
            title={content.primary.hero_title.text}
            backgroundImage={content.primary.hero_image.url}
          />
        )
      })}
    </div>
  )
}

export default SliceZone
