
export function FormStateH3({ formData }) {
    {/* Form State Display Table with h3 tags - Question 3*/}
    return (
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
    );
}