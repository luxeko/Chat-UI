import React, { useContext } from 'react'
import usingLocalStorage from '../Components/Hooks/usingLocalStorage';

const ContactsContext = React.createContext();
export function useContacts() {
    return useContext(ContactsContext)
}
export function ContactProvider({ children }) {
    const [contact, setContact] = usingLocalStorage('contact', [])

    function createContact(id, name) {
        setContact(prevContacts => {
            return [...prevContacts, {id, name}]
        })
    }
    return (
        <ContactProvider.Provider value={{contact, createContact}}>
            {children}
        </ContactProvider.Provider>
    )
}
