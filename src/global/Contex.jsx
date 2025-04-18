import {  createContext, useState } from "react"


export const UserContext = createContext()
export const useCustomHook = () => useState(UserContext)

const Contex = ({children}) => {
   const user = JSON.parse(localStorage.getItem(`userData`))
   const userToken = localStorage.getItem(`userToken`)
   console.log(user)
   console.log(userToken)
  return (
    <UserContext.Provider value ={{userToken,user}}>
        {children}
    </UserContext.Provider>
  )
}

export default Contex