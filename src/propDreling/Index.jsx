import React from 'react'
import Home from './Home'


const Index = ({user}) => {
  return (
    <div>
        This is the Index Component
        <p>Welcome to the Index page!</p>
        <Home user = {user} />
        <p>age:{user.age}</p>
        
    </div>
  )
}

export default Index