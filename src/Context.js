import React, { useState, createContext } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      window.sessionStorage.setItem('token', token)
      setIsAuth(true)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Consumer: Context.Consumer,
  Provider
}
