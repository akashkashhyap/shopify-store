import * as React from "react"
import Logo from "../icons/logo"
import { footerStyle, copyright, blurb, logos } from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
      </div>

      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
