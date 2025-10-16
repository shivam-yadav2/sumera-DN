import React from 'react'
import {Navbar} from '../Components/customComponent/Navbar'
import {Footer} from '../Components/customComponent/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout