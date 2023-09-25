import patient1 from '../../../assets/images/people-1.png'
import patient2 from '../../../assets/images/people-2.png'
import patient3 from '../../../assets/images/people-3.png'
import doctorImage from '../../../assets/images/doctor.png'
import BlogPageCard from './BlogPageCard'
import DoctorListCard from './DoctorListCard'

const BlogPage = () => {

    const blogPost = [
        {
          id:1,
          title: '2 times of brush in a day can keep you healthy',
          image: patient1,
          name: 'Jhon-deo',
          Date: '26-09-2023',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio explicabo iste molestiae saepe alias dolor aliquid consectetur neque possimus.'
        },
        {
          id:2,
          title: 'Teeth cancer is taking a challenge',
          image: patient2,
          name: 'Bilkis Begum',
          Date: '26-09-2023',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio explicabo iste molestiae saepe alias dolor aliquid consectetur neque possimus.'
        },
        {
          id:3,
          title: 'Teeth most important part of body',
          image: patient3,
          name: 'Winason herry',
          Date: '26-09-2023',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio explicabo iste molestiae saepe alias dolor aliquid consectetur neque possimus.'
        }
      ]
      const doctorList = [
        {
          id:1,
          image: doctorImage,
          name: 'Dr. Jhon-deo',
          title: 'MBBS DMC, FCPS Bardem',
          phone: '01700000000',
        },
        {
          id:2,
          image: doctorImage,
          name: 'Dr. Jhon-deo',
          title: 'MBBS DMC, FCPS Bardem',
          phone: '01700000000',
        },
        {
          id:3,
          image: doctorImage,
          name: 'Dr. Jhon-deo',
          title: 'MBBS DMC, FCPS Bardem',
          phone: '01700000000',
        }
      ]
  return (
    <div className="container mx-auto mt-10">
        <header className="text-center">
            <h2 className="text-2xl font-bold text-pink-400 py-5">Our Blog</h2>
            <h3 className="text-4xl font-bold text-gray-700 ">From Our Blog News</h3>
        </header>
        <div className="mt-10 flex space-x-5 justify-between items-center ">
            {
                blogPost.map(item => (<BlogPageCard key={item.id} item={item} />))
            }
        </div>
        <div className="doctoresList mt-10">
            <header className='text-center'>
                <h2 className="text-2xl font-bold text-pink-400 py-5">Our Doctors</h2>
            </header>
            <div className="mt-10 flex items-center justify-between space-x-4">
                {
                    doctorList.map(doctor => (<DoctorListCard key={doctor.id} doctor={doctor} />))
                }
            </div>
        </div>
    </div>
  )
}

export default BlogPage