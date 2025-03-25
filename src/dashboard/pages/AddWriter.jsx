import React, { useState } from "react";
import axios from "axios";
function AddWriters() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("https://newshive-express-1.onrender.com/add-writer", formData);
      
      console.log("Writer added successfully:", res.data);
      alert("Writer added successfully!");
  
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        category: "",
        password: "",
      });
      
    } catch (error) {
      console.error("Error adding writer:", error);
      alert("Failed to add writer. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-[#E5E5E5]">
        <h2 className="text-2xl font-bold mb-4">Add Writer</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">--select category--</option>
              <option value="Education">Education</option>
                <option value="Travel">Travel</option>
                <option value="Health">Health</option>
                <option value="International">International</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add writer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWriters;