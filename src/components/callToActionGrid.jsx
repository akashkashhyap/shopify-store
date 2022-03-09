import React from "react"
// import styled from "styled-components"
import CallToAction from "./callToAction"

const callToActionGrid = ({ callToActions }) => {
  return (
    <>
      {callToActions.map((callToAction, i) => {
        // console.log("callToAction", callToAction)
        return (
          <CallToAction
            key={i}
            title={callToAction.title.text}
            content={callToAction.content.richText}
            featuredImage={callToAction.featured_image.gatsbyImageData}
            actionlink={callToAction.action_link.uid}
            tag={callToAction.tag}
          />
        )
      })}
    </>
  )
}

export default callToActionGrid
