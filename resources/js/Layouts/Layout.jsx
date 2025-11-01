import React from 'react'
import {Navbar} from '../Components/customComponent/Navbar'
import {Footer} from '../Components/customComponent/Footer'
import { Toaster } from 'sonner'
import { PopupProvider, usePopup } from '../contexts/PopupContext'
import ContactPopup from '../Components/customComponent/ContactPopup'

const LayoutContent = ({children}) => {
  const { isBookingPopupOpen, closeBookingPopup } = usePopup();

  return (
    <div>
      <Toaster position="top-right" richColors />
      <Navbar />
      {children}
      <Footer />
      <ContactPopup isOpen={isBookingPopupOpen} onClose={closeBookingPopup} />
    </div>
  )
}

const Layout = ({children}) => {
  return (
    <PopupProvider>
      <LayoutContent>{children}</LayoutContent>
    </PopupProvider>
  )
}

export default Layout