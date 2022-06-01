import React from 'react'

const Items = ({user}) => {
    console.log("user",user)
  return <>
   
    <div>{user.dept}</div>
  </>
}

export default Items