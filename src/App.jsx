import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: "",
    category: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    category: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // no page reload

    const isValid = validateForm();
    if (isValid) {
      console.log("Submission successfully done.", formData);

      //after valid submit, clear form and error
      setFormData({
        name: "",
        category: ""
      });
      setErrors({
        name: "",
        category: ""
      });
    }
    else {
      console.log("Form has error.", formData);
    }
  }


  const handleInputChange = (e) => {
    // console.log("changed name : ", e.target.value);
    setFormData({
      ...formData, // keep copy of previous 
      name: e.target.value // update
    });
  }

  const handleSelectChange = (e) => {
    // console.log("category : ", e.target.value);
    setFormData(
      {
        ...formData, // keep copy of previous
        category: e.target.value // update
      }
    );
  }


  const validateForm = () => {
    const newErrors = {
      name: "",
      category: ""
    };

    if (!(formData.name.trim())) {
      newErrors.name = "Name is required!";
    }
    if (!formData.category) {
      newErrors.category = "Category is required!";
    }

    setErrors(newErrors); // set the message

    return !(newErrors.name) && !(newErrors.category);
  }




  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dynamic Form
        </h1>

        {/* form section */}
        <form onSubmit={handleSubmit}>
          {/* input and select section  */}
          <div className="flex gap-4 mb-6">

            {/* input field section*/}
            <div className="flex-1">
              <input type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* error message condition */}
              { errors.name && (<p className="text-red-500 text-bold  mt-1">{errors.name}</p>)}
            </div>

            {/* select option section */}
            <div className="flex-1">

              <select
                value={formData.category}
                onChange={handleSelectChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="mobile">Mobile App Developer</option>
                <option value="qa">QA / Tester</option>
              </select>
              {/* error message condition  */}
              { errors.category && <p className="text-red-500 text-bold  mt-1"> {errors.category} </p>}
            </div>
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  )
}

export default App
