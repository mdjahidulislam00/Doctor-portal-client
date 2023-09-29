
const AppointmentTable = () => {
    const data = [
        {
          snNo: 1,
          name: "John Doe",
          gender: "Male",
          age: 30,
          weight: 70,
          contract: "12345",
          prescription: "Prescription 1",
        },
        {
          snNo: 2,
          name: "Jane Smith",
          gender: "Female",
          age: 25,
          weight: 60,
          contract: "67890",
          prescription: "Prescription 2",
        },
        // Add more data rows here
      ];
  return (
    <div className="container mx-auto py-4">
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Sn No</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Gender</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">Weight</th>
          <th className="px-4 py-2">Contract</th>
          <th className="px-4 py-2">Prescription</th>
          <th className="px-4 py-2">View</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.snNo}>
            <td className="border px-4 py-2">{item.snNo}</td>
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.gender}</td>
            <td className="border px-4 py-2">{item.age}</td>
            <td className="border px-4 py-2">{item.weight}</td>
            <td className="border px-4 py-2">{item.contract}</td>
            <td className="border px-4 py-2">{item.prescription}</td>
            <td className="border px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
                View
              </button>
            </td>
            <td className="border px-4 py-2">
              <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded">
                Approve
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded ml-2">
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AppointmentTable