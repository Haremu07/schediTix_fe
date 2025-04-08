import {  createContext, useState } from "react"


export const UserContext = createContext()
export const useCustomHook = () => useState(UserContext)
const Contex = ({children}) => {
    const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value ={{user}}>
        {children}
    </UserContext.Provider>
  )
}

export default Contex