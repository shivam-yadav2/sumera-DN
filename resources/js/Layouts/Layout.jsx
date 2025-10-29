import React from 'react'
import {Navbar} from '../Components/customComponent/Navbar'
import {Footer} from '../Components/customComponent/Footer'
import { Toaster } from 'sonner'

const Layout = ({children}) => {
  return (
    <div>
      <Toaster position="top-right" richColors />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout