import React, { useContext, useEffect, useState } from 'react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {

  const [myUser, setMyUser] = useState(null)
  const [loginFormVisible, setloginFormVisible] = useState(false);

  return (
    <UserContext.Provider value={{ loginFormVisible, setloginFormVisible, myUser , setMyUser}}>
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
