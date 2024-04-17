// import React from 'react'

import Navbar from "./navbar"

function Header({name}) {
  return (
    <header className=" w-full fixed">
      <Navbar name={name}/>
    </header>
  )
}

export default Header