"use client";
import { useState } from "react";

export default function AddPost() {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleTitleChange = (event) => {
    setFormData({ ...formData, title: event.target.value }); // Update title in formData
  };

  const handleContentChange = (event) => {
    setFormData({ ...formData, content: event.target.value }); // Update content in formData
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log('Submitting form data:', formData); // Add this line to log formData
  
    try {
      const response = await fetch("/api/add-post", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      setFormData({ title: '', content: '' });
  
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  return (
    <main className=" text-black">
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 bg-gray-100 rounded-md shadow-lg">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium text-black">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleTitleChange}
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
            onChange={handleContentChange}
            className="p-2 mt-1 border border-gray-300 rounded-md h-32"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  );
}
