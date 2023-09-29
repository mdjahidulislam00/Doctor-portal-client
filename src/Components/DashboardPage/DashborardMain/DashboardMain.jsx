import Calendar from "react-calendar"
import DashborardNavbar from "../DashborardNavbar/DashborardNavbar"
import { useState } from "react";
import AppointmentTableOnDate from "../AppointmentTableOnData/AppointmentTableOnDate";



const DashboardMain = () => {
    const [value, onChange] = useState(new Date());
    const pickData = (value.toISOString().split("T")[0]);
  return (
    <div className="flex">
        <div className="basis-3/12 bg-pink-400 h-screen">
           <DashborardNavbar />
        </div>
        <div className="basis-4/12  flex flex-col items-center border-r-2">
            <h2 className="text-2xl text-gray-800 font-bold mt-10 mb-16">Appointment</h2>
                <Calendar className='w-96  p-5 rounded-lg shadow-lg border border-pink-400 text-xl text-gray-700' onChange={onChange} value={value} />
        </div>
        <div className="basis-5/12 mt-10">
           <AppointmentTableOnDate pickData={pickData} />
        </div>
    </div>
  )
}

export default DashboardMain