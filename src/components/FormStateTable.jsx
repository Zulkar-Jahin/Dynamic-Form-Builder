export function FormStateTable({ formData }) {
    return (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-700">Form State (Table Format):</h2>

          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left"> Field </th>
                <th className="border border-gray-300 px-4 py-2 text-left"> Name </th>
                <th className="border border-gray-300 px-4 py-2 text-left"> Category </th>
              </tr>
            </thead>
            <tbody>
              {formData.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2"> {index + 1} </td>
                  <td className="border border-gray-300 px-4 py-2"> {item.name || "(empty)"} </td>
                  <td className="border border-gray-300 px-4 py-2"> {item.category || "(empty)"} </td>
                </tr>

              ))}
            </tbody>
          </table>

        </div>
        
    );
}