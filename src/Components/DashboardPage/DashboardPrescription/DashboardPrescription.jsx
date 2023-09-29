import AppointmentTable from "../DashborardMain/AppointmentTable/AppointmentTable"
import DashborardNavbar from "../DashborardNavbar/DashborardNavbar"

const DashboardPrescription = () => {
  return (
    <div className="flex">
        <div className="basis-3/12 bg-pink-400 h-screen">
           <DashborardNavbar />
        </div>
        <div className="basis-9/12 mt-5">
            <div className="mt-10 ">
              <header className="ml-5 text-xl font-semibold">All Prescription</header>
              <div className="mx-5">
                  <AppointmentTable />
              </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardPrescription