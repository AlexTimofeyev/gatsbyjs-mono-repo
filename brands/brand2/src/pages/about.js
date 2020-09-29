import React from 'react'
import { Button, Menu } from '@mono-rep/shared-ui'
import { menuItems } from '../data'

const AboutPage = () => {
    return(
      <div>
        <h1>Hello this is About Brand 2</h1>
        <Menu items={menuItems} current="/about" />
        <Button />
      </div>
    )
  }
  
  export default AboutPage