import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const Navigate = useNavigate();

  const [form, setForm] = useState({
    imageUrl: "",
    caption: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/create-post", form).then((res) => {
      console.log(res.data);
      // alert("Post created successfully!");
      setForm({ imageUrl: "", caption: "" }); //reset form fields
      Navigate("/"); // Redirect to home page after successful post creation
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <form
        className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-8 border border-gray-100"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-extrabold mb-2 text-center text-blue-700 drop-shadow">
          Create a Post
        </h2>
        <div>
          <label
            className="block text-gray-700 mb-2 font-semibold"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Enter image URL"
            required
            autoComplete="off"
            value={form.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 mb-2 font-semibold"
            htmlFor="caption"
          >
            Caption
          </label>
          <input
            type="text"
            id="caption"
            name="caption"
            className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Write a caption"
            required
            autoComplete="off"
            value={form.caption}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 rounded-lg font-bold hover:scale-105 hover:shadow-lg transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
