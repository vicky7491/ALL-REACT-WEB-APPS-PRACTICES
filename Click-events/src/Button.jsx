import React from 'react'

const Button = () => {

const handleClick = (e) => e.target.textContent = "OUCH !"; 
  return (
    <button onD oubleClick={(e) => handleClick(e)}>CLICK ME</button>
  )
}
export default Button