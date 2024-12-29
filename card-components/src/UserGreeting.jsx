import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = (props) => {
  if(props.isLoggedIn){
    return <h2 className='welcome-message'>Welcome {props.username}</h2>
  }
    return <h2 className='login-prompt'>Please login to continue</h2>
}

UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultTypes = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting