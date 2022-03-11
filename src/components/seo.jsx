import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const Seo = ({
  title = "",
  description = "",
  pathname = "",
  image = "",
  children = null,
  schemaMarkup
}) => {
  const location = useLocation()
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleDefault
          siteUrl
          hrefLang
          siteDescription
          siteImage
          twitter
        }
      }
    }
  `)

  const {
    siteTitle,
    siteTitleDefault,
    siteUrl,
    siteDescription,
    siteImage,
    hrefLang,
    twitter,
  } = siteMetadata

  const seo1 = {
    title: title || siteTitleDefault,
    description: description || siteDescription,
    url: pathname ? `${siteUrl}${pathname}` : location.href,
    image: `${siteUrl}${image || siteImage}`,
  }

  return (
    <Helmet
      title={title}
      defaultTitle={siteTitleDefault}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={hrefLang} />
      <meta name="description" content={description} />
      <meta name="image" content={seo1.image} />
      <meta property="og:title" content={seo1.title} />
      <meta property="og:url" content={seo1.url} />
      <meta property="og:description" content={seo1.description} />
      <meta property="og:image" content={seo1.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo1.title} />
      <meta name="twitter:url" content={seo1.url} />
      <meta name="twitter:description" content={seo1.description} />
      <meta name="twitter:image" content={seo1.image} />
      <meta name="twitter:creator" content={twitter} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      {/* The following meta tag is for demonstration only and can be removed */}
      {!!process.env.GATSBY_DEMO_STORE && (
        <meta
          name="robots"
          content="noindex, nofollow"
        />
      )}
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
      {children}
    </Helmet>
  )
}

export default Seo;