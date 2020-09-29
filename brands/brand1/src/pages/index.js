import React from 'react'
import { Button, SEO } from '@mono-rep/shared-ui'
// import imgPath from '../assets/images/robot.jpg';

import { Link } from "gatsby"
import Image from "../components/image"
import { useSiteMetadata } from "../hooks/use-site-metadata"



const IndexPage = () => {

    const SEOProps = useSiteMetadata()
    return(
      <div>
        <SEO {...SEOProps} />
        <h1>Hello this is Brand 1</h1>
        <Link to="/">Go to Index</Link>
        <Link to="/about">Go to About</Link> 
        <Button value="brand 1 clicker"/>
        <br/>
        <Image name="robot.jpg" alt="lallala"/>
      </div>
    )
  }
  

  export default IndexPage