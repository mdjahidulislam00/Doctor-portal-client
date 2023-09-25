import headerImage from '../../../assets/images/chair.png'
import headerBgImage from '../../../assets/images/bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChemberInfoCard from './chemberInfoCard/ChemberInfoCard'
import {FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Headers = () => {
    const chamberInfo =[
        {
            id: 1,
            icon : <FaClock />,
            name: 'Opening Hours',
            description: 'saterday to Thusday 8Am - 6Pm',
            bg: 'bg-pink-400',

        },
        {
            id:2,
            icon : <FaLocationDot />,
            name: 'Visit Our Location',
            description: 'House#08, Road# 18, Mirpur 10, Dhaka',
            bg:'bg-gray-500'
        },
        {
            id:3,
            icon : <FaPhone />,
            name: 'Contract us Now',
            description: '0170000000',
            bg:'bg-pink-400'
        }
    ]
  return (
    <> 
    <div style={{ backgroundImage: `url(${headerBgImage})`}} className=' '>
        <div  className="container mx-auto lg:h-[650px]  flex justify-between items-center">
            <div className="basis-4/12 flex flex-col  space-y-5">
                <h2 className="text-5xl text-gray-800 font-bold">Your New Smile Starts Here</h2>
                <p className="text-lg font-semibold text-justify text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Voluptates, rerum! Consectetur maiores possimus,
                      ducimus nisi modi repellendus numquam aliquam quidem
                .</p>
                <button className='w-48 py-4 rounded-md text-lg text-white bg-pink-400 font-semibold hover:bg-pink-500'>GET APPOINTMENT</button>
            </div>
            <div className="basis-6/12 p-2 rounded-lg">
                <img src={headerImage} alt="Chair Image" />
            </div>
        </div>
        <div className="company-information flex justify-center space-x-1 relative top-12 ">
            {
                chamberInfo.map(info => (<ChemberInfoCard key={info.id} info={info} />))
            }
        </div>
     </div>
    </>
  )
}

export default Headers