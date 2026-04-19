import { useState } from 'react'
import './App.css'
import { FormField } from './components/FormField';
import { FormStateH3 } from './components/FormStateH3'
import { FormStateTable } from './components/FormStateTable';

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

        <p className="text-gray-600 mb-8">
          Add multiple fields, validate your data, and see real-time updates below.
        </p>

        {/* form section */}
        <form onSubmit={handleSubmit}>

          {/* Form field component */}
          {formData.map((item, index) => (
            <FormField
              key={item.id}
              item={item}
              index={index}
              errors={errors}
              fieldNumber={index + 1}
              onInputChange={handleInputChange}
              onSelectChange={handleSelectChange}
              onDelete={handleDeleteField}
            />
          ))}

          {/* Plus Button */}
          <button
            type="button"
            onClick={handleAddField}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors mr-2 hover:scale-105 active:scale-95 transition-transform"
          >
            Add Field
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors hover:scale-105 active:scale-95 transition-transform"
          >
            Submit Form
          </button>

        </form>

        {/* Form State Display Table with h3 tags - Question 3*/}
        <FormStateH3 formData={formData} />
        {/* Form State display with table - Question 8 */}
        <FormStateTable formData={formData} />

      </div>
    </div>
  )
}

export default App
