import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within a PopupProvider');
    }
    return context;
};

export const PopupProvider = ({ children }) => {
    const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);

    const openBookingPopup = () => setIsBookingPopupOpen(true);
    const closeBookingPopup = () => setIsBookingPopupOpen(false);

    return (
        <PopupContext.Provider value={{ isBookingPopupOpen, openBookingPopup, closeBookingPopup }}>
            {children}
        </PopupContext.Provider>
    );
};

