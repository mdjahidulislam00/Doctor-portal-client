import AppointmentTable from "../DashborardMain/AppointmentTable/AppointmentTable";
import DashborardNavbar from "../DashborardNavbar/DashborardNavbar";

const DashboardPatients = () => {
  return (
    <div className="flex">
      <div className="basis-3/12 bg-pink-400 h-screen">
        <DashborardNavbar />
      </div>
      <div className="basis-9/12 mt-5">
        <header className="ml-5 text-xl font-semibold">
          Recent Appointment
        </header>
        <div className="mx-5">
          <AppointmentTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPatients;
