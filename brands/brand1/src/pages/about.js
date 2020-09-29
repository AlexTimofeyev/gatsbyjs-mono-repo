import React from 'react'
import { Link } from "gatsby"
import Image from "../components/image"


const AboutPage = () => {
    let imgStyle = {
      width: '350px'
    }
    return(
      <div>
        <h1>Hello this is About Brand 1</h1>
        <Link to="/">Go to Index</Link>
        <Link to="/about">Go to About</Link>
        <Image name="italy.jpg" alt="italy italy" style={imgStyle}/>
      </div>
    )
  }
  
  export default AboutPage