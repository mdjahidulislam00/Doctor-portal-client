import { FaCalendar, FaGear, FaList, FaUser, FaUsers } from "react-icons/fa6"

const DashborardNavbar = () => {
  return (
    <div>
         <header className="text-center my-10 text-3xl text-white font-bold">Dashboard</header>
            <nav className="">
                <div className="ml-10 flex flex-col space-y-12">
                <button className="flex space-x-3 items-center text-white text-2xl font-semibold ">
                    <span><FaCalendar /></span>
                    <span>Appointment</span>
                </button>
                <button className="flex space-x-3 items-center text-white text-2xl font-semibold ">
                    <span><FaUsers /></span>
                    <span>Patients</span>
                </button>
                <button className="flex space-x-3 items-center text-white text-2xl font-semibold ">
                    <span><FaList /></span>
                    <span>Prescription</span>
                </button>
                <button className="flex space-x-3 items-center text-white text-2xl font-semibold ">
                    <span><FaGear /></span>
                    <span>Setting</span>
                </button>
                </div>
                <div className="ml-10 mt-96">
                    <div className="flex space-x-2 text-2xl text-white">
                    <span>
                        <FaUser />
                    </span>
                    <span className="">
                        Log out
                    </span>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default DashborardNavbar