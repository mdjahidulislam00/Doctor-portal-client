
const BlogPageCard = ({item}) => {
  return (
    <div className="border rounded-md py-7 ">
        <div className="autorSection flex space-x-5 px-5">
            <img className="w-16 h-16" src={item.image} alt={item.name} />
            <div className="flex flex-col">
                <h2 className="py-1 font-semibold">{item.name}</h2>
                <h2 className="text-gray-400">{item.Date}</h2>
            </div>
        </div>
        <div className="info px-5 mt-3">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-gray-500 text-justify">{item.description}</p>
        </div>
    </div>
  )
}

export default BlogPageCard