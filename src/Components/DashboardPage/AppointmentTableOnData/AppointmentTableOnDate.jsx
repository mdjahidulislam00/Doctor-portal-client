

const AppointmentTableOnDate = ({pickData}) => {
  return (
    <div>
         <header className="flex justify-between text-xl font-semibold px-4">
                <div >Appointment</div>
                <div className="p-2 border rounded-lg">{pickData}</div>
            </header>
            <div className="mt-10">
            <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Schedule</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        {/* <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.schedule}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
                  {item.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
            </div>
    </div>
  )
}

export default AppointmentTableOnDate