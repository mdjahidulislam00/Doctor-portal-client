import DashborardNavbar from "../DashborardNavbar/DashborardNavbar"
import AppointmentTable from "./AppointmentTable/AppointmentTable"

const DashboardMain = () => {
  

  return (
    <div className="flex">
        <div className="basis-3/12 bg-pink-400 h-screen">
           <DashborardNavbar />
        </div>
        <div className="basis-9/12 mt-5">
            <header className="text-2xl font-semibold p-5">Dashboard</header>
            <div className="flex justify-around space-x-3 mx-5">
                <div className="w-60 flex space-x-2 py-5 px-3 bg-red-600 text-white rounded-lg">
                  <div className="basis-4/12 text-5xl font-bold">
                    09
                  </div>
                  <div className="basis-8/12 flex flex-col text-xl font-semibold">
                    <span>Pending</span>
                    <span>Appointment</span>
                  </div>
                </div>
                <div className="w-60 flex space-x-2 py-5 px-3 bg-blue-600 text-white rounded-lg">
                  <div className="basis-4/12 text-5xl font-bold">
                    09
                  </div>
                  <div className="basis-8/12 flex flex-col text-xl font-semibold">
                    <span>Today</span>
                    <span>Appointment</span>
                  </div>
                </div>
                <div className="w-60 flex space-x-2 py-5 px-3 bg-green-600 text-white rounded-lg">
                  <div className="basis-4/12 text-5xl font-bold">
                    09
                  </div>
                  <div className="basis-8/12 flex flex-col text-xl font-semibold">
                    <span>Total</span>
                    <span>Appointment</span>
                  </div>
                </div>
                <div className="w-60 flex space-x-2 py-5 px-3 bg-yellow-500 text-white rounded-lg">
                  <div className="basis-4/12 text-5xl font-bold">
                    09
                  </div>
                  <div className="basis-8/12 flex flex-col text-xl font-semibold">
                    <span>Total</span>
                    <span>Patient</span>
                  </div>
                </div>
            </div>
            <div className="mt-10 ">
              <header className="ml-5 text-xl font-semibold">Recent Appointment</header>
              <div className="mx-5">
                  <AppointmentTable />
              </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardMain