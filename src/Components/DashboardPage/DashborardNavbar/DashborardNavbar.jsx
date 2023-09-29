import {
  FaCalendar,
  FaClipboard,
  FaGear,
  FaList,
  FaUser,
  FaUsers,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const DashborardNavbar = () => {
  return (
    <>
      <nav className="mt-20">
        <div className="ml-10 flex flex-col space-y-8">
         <Link to='/dashboard' > <button className="flex space-x-3 items-center text-white text-lg font-semibold ">
            <span>
              <FaClipboard />
            </span>
            <span>Dashboard</span>
          </button>
          </Link>
          <Link to='/dashboard/appointment'>
          <button className="flex space-x-3 items-center text-white text-lg font-semibold ">
            <span>
              <FaCalendar />
            </span>
            <span>Appointment</span>
          </button>
          </Link>
          <Link to='/dashboard/patient' >
          <button className="flex space-x-3 items-center text-white text-lg font-semibold ">
            <span>
              <FaUsers />
            </span>
            <span>Patients</span>
          </button>
          </Link>
          <Link to='/dashboard/prescription'>
          <button className="flex space-x-3 items-center text-white text-lg font-semibold ">
            <span>
              <FaList />
            </span>
            <span>Prescription</span>
          </button>
          </Link>
          <button className="flex space-x-3 items-center text-white text-lg font-semibold ">
            <span>
              <FaGear />
            </span>
            <span>Setting</span>
          </button>
        </div>
        <div className="ml-10 mt-60">
          <div className="flex items-center space-x-2 text-lg text-white">
            <span>
              <FaUser />
            </span>
            <span className="">Log out</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashborardNavbar;
