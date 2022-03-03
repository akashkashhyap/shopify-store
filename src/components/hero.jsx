import React from "react"
import styled from "styled-components"


const HeroWrapper = styled.section`
  background: url("${(props) => props.backgroundImage}");
  height: calc(100vh - 66px);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;

  div {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.5);
    padding-top: 20px;
  }
`

const Hero = ({ title, backgroundImage }) => {
  console.log(title)
  return (
    <HeroWrapper backgroundImage={backgroundImage}>
      <div>
        <h1>{title}</h1>
      </div>
    </HeroWrapper>
  )
}

export default Hero