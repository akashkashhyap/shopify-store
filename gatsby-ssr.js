import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import { SearchProvider } from "./src/context/search-provider"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

export const wrapRootElement = ({ element }) => (
  <>
  <StoreProvider>{element}</StoreProvider>
  <SearchProvider>
      <SearchPage {...element} />
    </SearchProvider>
  </>
)
