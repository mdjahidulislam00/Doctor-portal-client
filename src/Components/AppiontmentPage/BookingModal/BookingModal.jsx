import { useState } from "react";
import { useForm } from "react-hook-form";

const BookingModal = ({ showModal, setShowModal , time, value }) => {
const { register, handleSubmit, formState: { errors }, reset } = useForm();
const [bookingFromData, setBookingFromData] = useState();
console.log(bookingFromData)

const onSubmit = (data) =>{
    data.service = time.title;
    data.AppointmentDate = value
    const todayDate = new Date();
    let today = todayDate.toISOString().split("T")[0];
    data.createdDate = today

  const fetchData = async () =>{
    const res = await fetch('http://localhost:5000/addAppointment', { 
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    const Data = await res.json()
      alert('Appointment Successfully Submitted') 
      setShowModal(false);
      setBookingFromData(Data)
      reset();
  }
  fetchData()
}

  return ( 
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative z-50 w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-5">
              Appointment Form for <br /> <span className="text-pink-400">{time.title} <br /> <span className="text-sm text-gray-600">{value}</span></span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-semibold"
                  htmlFor="name"
                >
                  Patient Name:
                </label>
                <input
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-pink-300"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 font-semibold">
                    Name is required.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-semibold"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <input
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-pink-300"
                  type="tel"
                  {...register("PhoneNumber", { required: true })}
                />
                {errors.PhoneNumber && (
                  <p className="text-red-500 font-semibold">
                    Phone number is required.
                  </p>
                )}
              </div>
              <div className="flex justify-between space-x-2">
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-semibold"
                  htmlFor="gender"
                >
                  Gender:
                </label>
                <select
                  className="w-28 px-4 py-2 rounded border focus:outline-none focus:border-pink-300"
                  {...register("gender", { required: true })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 font-semibold">
                    Gender is required.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-semibold"
                  htmlFor="age"
                >
                  Age:
                </label>
                <input
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-pink-300"
                  type="number"
                  {...register("age", { required: true })}
                />
                {errors.age && (
                  <p className="text-red-500 font-semibold">
                    Age is required.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-semibold"
                  htmlFor="weight"
                >
                  Weight (in kg):
                </label>
                <input
                  className="w-full px-4 py-2 rounded border focus:outline-none focus:border-pink-300"
                  type="number"
                  {...register("weight", { required: true })}
                />
                {errors.weight && (
                  <p className="text-red-500 font-semibold">
                    weight is required.
                  </p>
                )}
              </div>
              </div>
              <div className="mt-10 flex justify-between space-x-5">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 text-red-500 font-bold border rounded hover:text-red-600 focus:outline-none"
                >
                  Close
                </button>
                <button
                  className="px-6 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;
