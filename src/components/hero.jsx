import React from "react"
// import styled from "styled-components"
import {herobanner} from "../pages/index.module.css"



const Hero = ({ title, backgroundImage }) => {
  console.log(backgroundImage)
  return (
      <div className={`col-md-12 ${herobanner}`} style={{background:`url(${backgroundImage})`}}>
        <h1>{title}</h1>
      </div>
    
    // <HeroWrapper backgroundImage={backgroundImage}>
    //   <div className="col-md-12">
    //     <h1>{title}</h1>
    //   </div>
    // </HeroWrapper>
  )
}

export default Hero
