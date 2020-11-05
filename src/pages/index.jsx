import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout/index"

//import Image from "../components/image"
import SEO from "../components/seo"
import VideoSection from "../components/videoSection/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoSection />
  </Layout>
)

export default IndexPage
