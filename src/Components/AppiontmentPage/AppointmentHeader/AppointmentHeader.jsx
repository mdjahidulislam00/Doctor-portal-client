import headerImage from '../../../assets/images/chair.png'
import headerBgImage from '../../../assets/images/bg.png'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentSheduleCard from '../AppointmentSheduleCard/AppointmentSheduleCard';



const AppointmentHeader = () => {

  const appointmentShedule = [
    {
      id: 1,
      title: 'Teeth Orthodontics',
      time: '8:00 AM - 9:00 AM',
      seat: ' 10 seat Available'
    },
    {
      id: 2,
      title: 'Cosmetic Dentistry',
      time: '9:00 AM - 10:00 AM',
      seat: ' 20 seat Available'
    },
    {
      id: 3,
      title: 'Teeth Cleaning',
      time: '10:00 AM - 11:00 AM',
      seat: ' 15 seat Available'
    },
    {
      id: 4,
      title: 'Teeth Orthodontics',
      time: '11:00 AM - 12:00 AM',
      seat: ' 10 seat Available'
    },
    {
      id: 5,
      title: 'Teeth Orthodontics',
      time: '12:00 PM - 01:00 PM',
      seat: ' 10 seat Available'
    },
    {
      id: 6,
      title: 'Teeth Orthodontics',
      time: '01:00 PM - 2:00 PM',
      seat: ' 10 seat Available'
    }
  ]

  const [value, onChange] = useState(new Date());


  return (
    <div className='container mx-auto'>
        <div style={{ backgroundImage: `url(${headerBgImage})`}} className=' '>
        <div  className="container mx-auto lg:h-[600px]  flex justify-between items-center">
            <div className="basis-4/12 flex flex-col items-center  space-y-5">
                <h2 className="text-5xl text-gray-800 font-bold">Appointment</h2>
                <Calendar onChange={onChange} value={value} />
            </div>
            <div className="basis-6/12 p-2 rounded-lg">
                <img src={headerImage} alt="Chair Image" />
            </div>
        </div>
     </div>
     <div className="appointmentList my-10">
      <header>
        <h2 className='text-4xl text-pink-400 font-semibold text-center'>Available Appointment on <span className='font-bold text-pink-500'>{value.toDateString()}</span> </h2>
      </header>
      <div className="mt-5 grid grid-cols-3 gap-5">
        {
          appointmentShedule.map(time => (<AppointmentSheduleCard key={time.id} time={time} value={value.toISOString().split("T")[0]}/>))
        }
        
      </div>
     </div>
    </div>
  )
}

export default AppointmentHeader