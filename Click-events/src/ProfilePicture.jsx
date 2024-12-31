import React from 'react'

const ProfilePicture = () => {
    const handleClick = (e) => e.target.style.display = "none";
    const imageUrl = './src/assets/userimage.png';
  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Myimage" />
  )
}

export default ProfilePicture