import { useState } from 'react'
import './App.css'
import { FormStateH3 } from './components/FormStateH3';

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

  // when deleted a input 
  const handleDeleteField = (id) => {
    // cant delete all elements 
    if (formData.length === 1) {
      alert("At least one field is required!");
      // console.log("At least one field is required!");
      return;
    }

    // delete from Form-data 
    setFormData(formData.filter((item) => {
      return item.id !== id;
    }));
    // delete from errors list 
    setErrors(errors.filter((item) => {
      return item.id !== id;
    }));
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
              <div className="flex-1 flex gap-2">


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

                <button
                  type="button"
                  className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors h-fit"
                  onClick={() => { handleDeleteField(item.id) }}
                >
                  Delete
                </button>
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


        {/* Form State Display Table with h3 tags - Question 3*/}
        


        {/* Form State display with table - Question 8 */}
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






      </div>
    </div>
  )
}

export default App
