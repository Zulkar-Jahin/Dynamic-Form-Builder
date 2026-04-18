import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState([{
    id: 1,
    name: "",
    category: ""
  }]);
  const [nextId, setNextId] = useState(2);


  const [errors, setErrors] = useState([{
    id: 1,
    name: "",
    category: ""
  }]);

  const handleSubmit = (e) => {
    e.preventDefault(); // no page reload
  
    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!"); // User feedback
    } else {
      console.log("Form has errors");
    }
  }


  // name change handler 
  const handleInputChange = (id, value) => {
    setFormData(
      formData.map((item) => {
        if (item.id === id) {
          return { ...item, name: value };
        }
        return item;
      })
    );
  }

  // category change handler 
  const handleSelectChange = (id, value) => {
    setFormData(
      formData.map((item) => {
        if (item.id === id) {
          return { ...item, category: value };
        }
        return item;
      })
    );
  }


  const validateForm = () => {
    const newErrors = [];
    // check all formdata for errors. 
    formData.forEach((item) => {
      const itemError = {
        id: item.id,
        name: "",
        category: ""
      }

      if (!item.name.trim()) {
        itemError.name = "Name is required!";
      }
      if (!item.category) {
        itemError.category = "Category is required!";
      }

      newErrors.push(itemError); // insert into array
    });

    setErrors(newErrors); // set the message


    // check all formdata if any item has error 
    let hasError = false;
    for (let i = 0; i < newErrors.length; i++) {
      if (newErrors[i].name || newErrors[i].category) {
        hasError = true;
        break;
      }
    }

    return !hasError;
  }


  // when added a new input
  const handleAddField = () => {
    const newField = {
      id: nextId,
      name: "",
      category: ""
    };
    setFormData([...formData, newField]);
    setErrors([...errors, { id: nextId, name: "", category: "" }]); // initially there is no error 
    setNextId(nextId + 1);
  }




  return (

    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dynamic Form
        </h1>



        {/* form section */}
        <form onSubmit={handleSubmit}>

          {/* Loop through all fields */}
          {formData.map((item, index) => (


            // input and select section
            <div key={item.id} className="flex gap-4 mb-6">
              {/* input field section */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={item.name}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* error message condition */}
                {errors[index]?.name && (
                  <p className="text-red-500 text-sm mt-1">{errors[index].name}</p>
                )}
              </div>

              {/* select option section */}
              <div className="flex-1">
                <select
                  value={item.category}
                  onChange={(e) => handleSelectChange(item.id, e.target.value)}
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
            </div>
          ))}



          {/* Plus Button */}
          <button
            type="button"
            onClick={handleAddField}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors mr-2"
          >
            + Add Field
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>



        {/* Form State Display Table */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-700">Form State:</h2>
          {/* go throgh all items  */}
          {formData.map((item, index) => (
            <div key={item.id} className="mb-4">
              <h3 className="text-lg">Field {index + 1}:</h3>
              <h3 className="text-lg ml-4">Name: {item.name || '(empty)'}</h3>
              <h3 className="text-lg ml-4">Category: {item.category || '(empty)'}</h3>
            </div>
          ))}

        </div>






      </div>
    </div>
  )
}

export default App
