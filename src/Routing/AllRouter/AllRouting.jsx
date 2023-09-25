import { Route, Routes } from "react-router-dom"
import HomePage from "../../Components/Home/HomePage/HomePage"

const AllRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
        </Routes>
    </div>
  )
}

export default AllRouting