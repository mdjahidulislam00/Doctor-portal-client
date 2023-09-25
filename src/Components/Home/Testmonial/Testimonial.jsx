import patient1 from '../../../assets/images/people-1.png'
import patient2 from '../../../assets/images/people-2.png'
import patient3 from '../../../assets/images/people-3.png'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {

  const patientsComment = [
    {
      id:1,
      image: patient1,
      name: 'Jhon-deo',
      profession: 'Teacher',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio explicabo iste molestiae saepe alias dolor aliquid consectetur neque possimus.'
    },
    {
      id:2,
      image: patient2,
      name: 'Bilkis Begum',
      profession: 'Lower',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio explicabo iste molestiae saepe alias dolor aliquid consectetur neque possimus.'
    },
    {
      id:3,
      image: patient3,
      name: 'Winason herry',
      profession: 'Police',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio explicabo iste molestiae saepe alias dolor aliquid consectetur neque possimus.'
    }
  ]
  return (
    <div className="container mx-auto mt-24">
        <header>
            <h2 className="text-lg text-pink-400 font-bold mb-3">TESTIMONIAL</h2>
            <h2 className="text-4xl font-semibold">What's Our Patients Says,</h2>
        </header>
        <div className="mt-16 flex items-center justify-between space-x-5">
          {
            patientsComment.map(item => (<TestimonialCard key={item.id} item={item} />))
          }
        </div>
    </div>
  )
}

export default Testimonial