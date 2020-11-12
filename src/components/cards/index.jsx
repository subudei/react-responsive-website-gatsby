import React from "react"
import "./styles.css"
import CardItem from "../card"
import Tree from "../../images/trees.jpg"
import Ski from "../../images/ski.jpg"
import Mountin from "../../images/mountin.jpg"
import Tree2 from "../../images/tree.jpg"
import Bikiing from "../../images/biking.jpg"

function Cards() {
  return (
    <div className="cards">
      <h1>Where Comfort Meets Adventure</h1>
      <div className="cards--container">
        <div className="cards--wrapper ">
          <ul className="cards--items">
            <CardItem
              src={Mountin}
              text="Guided Excursions and Programs."
              label="Hiking"
              path="/summer"
            />
            <CardItem
              src={Ski}
              text="Mountain Resort are typically from November to April,which means access to over 400 skiable acres,  26 lifts, and more than 55 runs. "
              label="Skiing"
              path="/winter"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src={Bikiing}
              text="Experience the thrill of riding a professional-class mountain bike or road bike on some of Mountain Resort's most stunning trails."
              label="Biking"
              path="/summer"
            />
            <CardItem
              src={Tree2}
              text="Let's go and paint the town red!!!"
              label="Nature"
              path="/services"
            />
            <CardItem
              src={Tree}
              text="some text"
              label="Some Label"
              path="/services"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src={Ski}
              text="Let's go and paint the town red!!!"
              label="Color"
              path="/services"
            />
            <CardItem
              src={Mountin}
              text="Let's go and paint the town red!!!"
              label="Travel"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
