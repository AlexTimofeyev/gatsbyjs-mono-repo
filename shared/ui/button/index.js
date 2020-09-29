import React, { useState } from "react"
import './button.css'
const Button = ({ value }) => {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount(count + 1)} className="my-btn">
      {value || 'Click me'} - {count}
    </button>
  )
}

export default Button
