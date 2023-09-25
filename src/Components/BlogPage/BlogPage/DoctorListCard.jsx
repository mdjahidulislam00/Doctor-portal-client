import { FaPhone } from "react-icons/fa6"

const DoctorListCard = ({doctor}) => {
  return (
    <div className="border rounded-lg">
        <img className="w-80 h-80" src={doctor.image} alt="" />
        <div className="py-4 text-center bg-slate-200 flex flex-col space-y-2">
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <h2>{doctor.title}</h2>
            <h2 className="">{doctor.phone}</h2>
        </div>
    </div>
  )
}

export default DoctorListCard