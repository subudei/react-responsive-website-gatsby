import React from "react"
import "./styles.css"
import CardItem from "../card"
import Tree from "../../images/trees.jpg"
import Red from "../../images/red.jpg"
import Mountin from "../../images/mountin.jpg"
import Tree2 from "../../images/tree.jpg"

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC DEstinations</h1>
      <div className="cards--container">
        <div className="cards--wrapper ">
          <ul className="cards--items">
            <CardItem
              src={Tree}
              text="some text"
              label="Some Label"
              path="/services"
            />
            <CardItem
              src={Red}
              text="Let's go and paint the town red!!!"
              label="Color"
              path="/services"
            />
          </ul>
          <ul className="cards--items">
            <CardItem
              src={Mountin}
              text="Let's go and paint the town red!!!"
              label="Travel"
              path="/services"
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
              src={Red}
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
