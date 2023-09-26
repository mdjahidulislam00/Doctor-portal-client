import { useState } from "react";
import BookingModal from "../BookingModal/BookingModal"


const AppointmentSheduleCard = ({time, value}) => {
  const [showModal, setShowModal] = useState(true);

  const handleBookAppointment = () => {
    setShowModal(true)
  }
  return (
    <div className="border rounded p-6 flex flex-col items-center">
        <h2 className="text-pink-400 text-2xl font-bold mb-3">{time.title}</h2>
        <h2 className="text-md font-bold">{time.time}</h2>
        <h2 className="text-gray-600 text-sm">{time.seat}</h2>
        <button onClick={() => handleBookAppointment(time)} className="mt-3 px-3 py-2 bg-pink-400 text-white font-semibold rounded hover:bg-pink-500">BOOK APPOINTMENT</button>
        <BookingModal
          time={time}
          value={value}
          showModal={showModal}
          setShowModal={setShowModal}
         />
    </div>
  )
}

export default AppointmentSheduleCard