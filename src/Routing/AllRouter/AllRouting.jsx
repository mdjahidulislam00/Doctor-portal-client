import { Route, Routes } from "react-router-dom"
import HomePage from "../../Components/Home/HomePage/HomePage"
import AppointmentPage from "../../Components/AppiontmentPage/AppointmentMain/AppointmentPage"



const AllRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='appointment' element={<AppointmentPage />} />
        </Routes>
    </div>
  )
}

export default AllRouting