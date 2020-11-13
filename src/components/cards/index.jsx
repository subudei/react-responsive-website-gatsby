import React from "react"
import "./styles.css"
import CardItem from "../card"
import Kayak from "../../images/kayak.jpg"
import Ski from "../../images/ski.jpg"
import Mountin from "../../images/mountin.jpg"
import Fisherman from "../../images/fisherman.jpg"
import Bikiing from "../../images/biking.jpg"
import Holidays from "../../images/holiday.jpg"
import Landscape from "../../images/landscape.jpg"

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
              src={Fisherman}
              text="Water of Mountain Resort provides  outstanding fly fishing experiences for the discriminating fly fisherman on the world-class waters."
              label="Fishing"
              path="/summer"
            />
            <CardItem
              src={Kayak}
              text="Start your kayak adventure on our beautiful lake."
              label="Kayaking"
              path="/summer"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src={Holidays}
              text="Explore the snowy trails of Mountain Resort."
              label="Nature"
              path="/winter"
            />
            <CardItem
              src={Landscape}
              text="When you see a waterfall, an undisturbed meadow, or the glassy surface of a lake, it might be difficult to put the beauty into words."
              label="Travel"
              path="/summer"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
