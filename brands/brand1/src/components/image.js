import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ name, alt, style }) => {
    const data = useStaticQuery(graphql`
    query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
    const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(name);
    });
    console.log(data.images);
    if (!image) return null;
    return (<Img alt={alt} fluid={image.node.childImageSharp.fluid}  style={style} />);

  }
  
  export default Image