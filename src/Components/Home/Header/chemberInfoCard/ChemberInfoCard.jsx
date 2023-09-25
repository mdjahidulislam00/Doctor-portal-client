import {FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6'


const ChemberInfoCard = ({info}) => {
  return (
    <div className={`flex items-center justify-center p-8 ${info.bg} rounded shadow-lg hover:scale-105 duration-200`}>
        <div className="icon text-6xl mr-3 text-white">
        {info.icon}
        </div>
        <div className="info">
            <h2 className='text-white text-2xl font-semibold py-1'>{info.name}</h2>
            <p className='text-md font-semibold text-white'>{info.description}</p>
        </div>
    </div>
  )
}

export default ChemberInfoCard