
const TestimonialCard = ({item}) => {
  return (
    <div className="w-96 shadow-lg rounded-lg border py-4">
        <div className="info">
            <div className="p-5 text-justify text-lg text-gray-600">{item.description}</div>
            <div className="flex items-center space-x-4 p-5 bg-slate-100">
                <img className="w-16 h-16" src={item.image} alt='person image' />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-pink-400">{item.name}</h2>
                    <h2 className="text-sm font-bold text-gray-600">{item.profession}</h2> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard