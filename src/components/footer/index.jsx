import React from "react"
import "./style.css"
import Button from "../button"

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subcription-heading">
          Join the Adventure newsletter to recive our best vacation deals.
        </p>
        <p className="footer-subcription-text">
          You can unsubcribe at any time.
        </p>
        <div className="input-arias">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email @"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subcribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}
export default Footer
