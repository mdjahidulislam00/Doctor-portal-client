import { Route, Routes } from "react-router-dom"
import HomePage from "../../Components/Home/HomePage/HomePage"
import AppointmentPage from "../../Components/AppiontmentPage/AppointmentMain/AppointmentPage"
import LogInPage from "../../Components/SignInPage/LogInPage/LogInPage"
import DashboardMain from "../../Components/DashboardPage/DashborardMain/DashboardMain"
import DashboardAppointmentPage from "../../Components/DashboardPage/DashboardAppointmentPage/DashboardAppointmentPage"
import DashboardPatients from "../../Components/DashboardPage/DashboardPatients/DashboardPatients"
import DashboardPrescription from "../../Components/DashboardPage/DashboardPrescription/DashboardPrescription"



const AllRouting = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='appointment' element={<AppointmentPage />} />
            <Route path='logIn' element={<LogInPage />} />
            <Route path='dashboard' element={<DashboardMain />} />
            <Route path='dashboard/appointment' element={<DashboardAppointmentPage />} />
            <Route path='dashboard/patient' element={<DashboardPatients />} />
            <Route path='dashboard/prescription' element={<DashboardPrescription />} />
        </Routes>
    </div>
  )
}

export default AllRouting