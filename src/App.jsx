import { createContext, useState } from "react"
import AllRouting from "./Routing/AllRouter/AllRouting"

export const currentUser = createContext()

function App() {
  const [currentLogInUser, setCurrentLogInUser] = useState()
  return (
    <currentUser.Provider value={[currentLogInUser, setCurrentLogInUser]}>
      <AllRouting />
    </currentUser.Provider>
  )
}

export default App
