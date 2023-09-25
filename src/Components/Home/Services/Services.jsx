import fluorideImage from '../../../assets/images/fluoride.png'
import cavityImage from '../../../assets/images/cavity.png'
import TeethImage from '../../../assets/images/whitening.png'
import aboutImage from '../../../assets/images/treatment.png'
import doctorImage from '../../../assets/images/doctor.png'
import ServicesCard from './ServicesCard';

const Services = () => {

    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quod illum molestias officia quos expedita?",
            image: fluorideImage
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quod illum molestias officia quos expedita?",
            image: cavityImage
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quod illum molestias officia quos expedita?",
            image: TeethImage
        }
    ];

  return (
    <div className="container mx-auto mt-20">
        <header className="text-center">
            <h2 className="text-2xl font-bold text-pink-400 py-5">Our Services</h2>
            <h3 className="text-5xl font-bold text-gray-700 ">Services We Provide</h3>
        </header>
        <div className="mt-28 flex  justify-between">
            {
               services.map(item => (<ServicesCard key={item.id} item={item} />)) 
            }
        </div>
        <div className="mt-40 flex space-x-10">
            <div className="basis-4/12 ">
                <img className="rounded-lg shadow-md" src={aboutImage} alt="treatment" />
            </div>
            <div className="basis-6/12">
                <h2 className='text-5xl font-bold py-8'>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-lg text-gray-500 text-justify'>
                    Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Sint laudantium, voluptatum
                      porro sed rem, consequatur id officia aspernatur
                       velit illo ut eveniet, quis iste obcaecati iure!
                        Inventore hic id accusamus.
                        adipisicing elit. Sint laudantium, voluptatum
                      porro sed rem, consequatur id officia aspernatur
                       velit illo ut eveniet, quis iste obcaecati iure!
                        Inventore hic id accusamus.
                </p>
                <button className='mt-10 w-42 px-4 py-3 rounded-md bg-pink-400 text-white  font-semibold hover:bg-pink-500'>Learn More</button>
            </div>
        </div>
        <div className="mt-52">
                <div className="bg-gray-600 w-full h-[400px] flex ">
                    <img className='basis-4/12 h-[560px] relative bottom-40' src={doctorImage} alt='doctor image' />
                    <div className="basis-6/12 mt-16">
                        <h2 className='text-pink-400 text-xl font-bold mb-5'>APPOINTMENT</h2>
                        <h2 className='text-4xl font-semibold text-white mb-7'>Make an appointment Today</h2>
                        <p className='text-white text-lg mb-4'>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its</p>
                        <button className='mt-10 w-42 px-4 py-3 rounded-md bg-pink-400 text-white  font-semibold hover:bg-pink-500'>Learn More</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Services