import React from "react"
import Cards from "../components/cards"
//import { Link } from "gatsby"

import Layout from "../components/layout/index"

//import Image from "../components/image"
import SEO from "../components/seo"
import VideoSection from "../components/videoSection/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoSection />
    <Cards />
  </Layout>
)

export default IndexPage
