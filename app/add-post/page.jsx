
"use client"
import { useState } from "react";
export default function  AddPost(){

  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const title = e.target.title.value;  // Accessing the value of the input
    const content = e.target.content.value;  // Accessing the value of the input
  
    const data = { title, content };  // Now this is correct
    await fetch('/api/add-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  // No more circular reference error
    });
  };
  
  

return(
  <main className="">
    <h1>   Add post </h1>
     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-gray-100 rounded-md shadow-lg">
      <div className="flex flex-col">
        <label htmlFor="title" className="text-lg font-medium text-black">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className="p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="content" className="text-lg font-medium text-black">Content:</label>
        <textarea
          name="content"
          id="content"
          value={formData.content}
          onChange={handleChange}
          className="p-2 mt-1 border border-gray-300 rounded-md h-32"
          required
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  </main>

) 
}