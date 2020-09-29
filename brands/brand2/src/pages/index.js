import React from 'react'
import { Button, Menu } from '@mono-rep/shared-ui'
import { menuItems } from '../data'

const IndexPage = () => {
  return(
    <div>
      <h1>Hello this is Brand 22</h1>
      <Menu items={menuItems}  current="/"/>
      <Button />
    </div>
  )
}
  
  export default IndexPage