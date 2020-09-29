import React from "react"
import { Link } from "gatsby"
import './menu.css'

const MainMenu = ({ items, current }) => {
  console.log(items);
    return(
      <ul className="my-menu">
        {items.map(item => {
            return (<li className={current === item.path ? 'current' : ''}>
              <Link to={item.path}>{ item.name }</Link>
            </li>)
        })}
      </ul>
    )
}

export default MainMenu
