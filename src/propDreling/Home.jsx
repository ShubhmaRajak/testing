import React from 'react'
import About from './About'

const Home = ({user}) => {
  return (
    <div>
        <p>Welcome to the Home page!</p>
        <About user = {user} />
        <p>Address: {user.address}</p>
    </div>
  )
}

export default Home