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
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="mobile">Mobile App Developer</option>
                <option value="devops">DevOps Engineer</option>
                <option value="qa">Quality Assurance (QA)</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="product">Product Manager</option>
                <option value="data">Data Analyst</option>
                <option value="hr">Human Resources (HR)</option>
              </select>
              {/* error message condition  */}
              {errors[index]?.category && (
                <p className="text-red-500 text-sm mt-1">{errors[index].category}</p>
              )}
            </div>

            <button
              type="button"
              className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors h-fit hover:scale-105 active:scale-95 transition-transform"
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