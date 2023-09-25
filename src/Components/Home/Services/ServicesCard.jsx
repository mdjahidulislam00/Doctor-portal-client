import fluorideImage from '../../../assets/images/fluoride.png'
import cavityImage from '../../../assets/images/cavity.png'
import TeethImage from '../../../assets/images/whitening.png'

const ServicesCard = ({item}) => {
  return (
    <div className="w-96 flex flex-col items-center justify-center text-center space-y-5">
        <div className="image ">
            <img className='w-20 h-20' src={item.image} alt={item.name} />
        </div>
        <div className="info">
            <h1 className='text-3xl  font-semibold mb-7'>{item.name}</h1>
            <p className='text-xl text-justify'>{item.description}</p>
        </div>
    </div>
  )
}

export default ServicesCard