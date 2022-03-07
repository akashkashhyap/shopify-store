import * as React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
// import { GatsbyImage } from "gatsby-plugin-image"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"

export const query = graphql`
  {
    prismicAbout {
      uid
      data {
        title {
          text
        }
        content {
          richText
        }
        content_info {
          richText
        }
        body {
          ... on PrismicAboutDataBodyStoreButton {
            slice_type
            primary {
              button_link {
                url
              }
              button_label {
                text
              }
            }
          }
        }
      }
    }
  }
`
const ButtonWrapper = styled.div`
  a {
    background-color: rgb(255, 40, 97);
    color: #fff;
    padding: 15px 30px;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`
const About = ({ data }) => {
  console.log(data.prismicAbout)
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1> {data.prismicAbout.data.title.text} </h1>
            <RichText render={data.prismicAbout.data.content.richText} />
          </div>

          <div className="col-md-4">
            <RichText render={data.prismicAbout.data.content_info.richText} />
            <ButtonWrapper>
              <Link to="/">
                {data.prismicAbout.data.body[0].primary.button_label.text}
              </Link>
            </ButtonWrapper>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
