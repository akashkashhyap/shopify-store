import * as React from "react"
import { createClient, Provider as UrlqProvider } from "urql"

export const urqlClient = createClient({
  url: "https://gatsbyheadlessstore.myshopify.com/api/2021-01/graphql.json",
  fetchOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        "f6d2f9d368e1327fefefe5c97ad611ba",
    },
  },
})

export function SearchProvider({ children }) {
  return <UrlqProvider value={urqlClient}>{children}</UrlqProvider>
}
