import React from 'react'
import profilepic from './assets/userimage.png';

const Cards = () => {
  return (
    <div className='card'>
        <img className='cardimage' src={profilepic} alt="UserIamge" />
        <h1 className='cardname' >Nitish Kumar</h1>
        <p className='carddetails'>I am a react developer, with the experience of  2 days</p>
    </div>
  )
}

export default Cards