import React from 'react'
import Index from './Index'
import About from './About'

const Parent = ({onCityChange}) => {

    const user ={
    name : 'John Doe',
    age: 30,
    email: 'rahul@example.com',
    address: '123 Main St, Springfield, USA'
  }
  return (
    <>
    <div>Parent</div>
    <Index user={user} />
    <About  user={user} onCityChange={onCityChange} />
    </>
  )
}

export default Parent