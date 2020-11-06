import React from "react"
import "./style.css"
import Button from "../button"
import { Link } from "gatsby"

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
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/testimonials">Testimonials</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              import logo!!!
            </Link>
          </div>
          <small className="website-rights">subudei © 2020</small>
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            F
          </Link>
        </div>
      </section>
    </div>
  )
}
export default Footer
