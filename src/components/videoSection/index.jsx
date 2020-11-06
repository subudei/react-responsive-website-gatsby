import React from "react"

import Button from "../button"
import "./styles.css"
import Video from "../../assets/forest.mp4"

function VideoSection() {
  return (
    <div className="video-container">
      <video src={Video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="video-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  )
}
export default VideoSection
