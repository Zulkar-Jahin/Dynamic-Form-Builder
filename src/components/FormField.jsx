// testing 

export function FormField({ item, index, errors, fieldNumber, onInputChange, onSelectChange, onDelete }) {
  return (

    <div className="mb-3">

      <label className="text-sm font-semibold text-gray-700 mb-1 block">
        Field {fieldNumber}
      </label>

        <div className="flex gap-4 ">
          {/* input field section */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter your name"
              value={item.name}
              onChange={(e) => onInputChange(item.id, e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* error message condition */}
            {errors[index]?.name && (
              <p className="text-red-500 text-sm mt-1">{errors[index].name}</p>
            )}
          </div>

          {/* select option section */}
          <div className="flex-1 flex gap-2">
            <div className="flex-1">
              <select
                value={item.category}
                onChange={(e) => onSelectChange(item.id, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select category</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
              {/* error message condition  */}
              {errors[index]?.category && (
                <p className="text-red-500 text-sm mt-1">{errors[index].category}</p>
              )}
            </div>

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors h-fit"
              onClick={() => onDelete(item.id)}
              title="Delete this field" 
            >
              Delete
            </button>
          </div>
        </div>
    </div>

  );
}