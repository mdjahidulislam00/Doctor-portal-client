import { Route, Routes } from "react-router-dom"
import HomePage from "../../Components/Home/HomePage/HomePage"
import AppointmentPage from "../../Components/AppiontmentPage/AppointmentMain/AppointmentPage"
import LogInPage from "../../Components/SignInPage/LogInPage/LogInPage"
import DashboardMain from "../../Components/DashboardPage/DashborardMain/DashboardMain"



const AllRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='appointment' element={<AppointmentPage />} />
            <Route path='logIn' element={<LogInPage />} />
            <Route path='dashboard' element={<DashboardMain />} />
        </Routes>
    </div>
  )
}

export default AllRouting