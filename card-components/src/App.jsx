import React from 'react'
import Cards from './Cards'
import UserGreeting from './UserGreeting'

const App = () => {
  return (
    <>
    <Cards />
    <UserGreeting isLoggedIn={true} username="vicky_ydv95" />
    </>
  )
}

export default App