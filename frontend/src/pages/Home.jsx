import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {

useEffect(() => {
 axios.get("http://localhost:3000/posts").then((res)=>{
    console.log(res.data)
 })
}, [])
    
  const navigate = useNavigate();
return (
    <main className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen w-full p-4">
        <section className="w-full max-w-7xl mx-auto">
            <header className="flex items-center justify-between px-6 py-4 shadow-lg rounded-xl bg-white mb-8">
                <h1 className="text-3xl font-bold text-blue-700 tracking-tight">BookSook</h1>
                <button
                    onClick={() => {
                        navigate("/create-post");
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition font-semibold"
                >
                    + Create Post
                </button>
            </header>

            <div className="posts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                <div className="post bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 border border-blue-100">
                    <img
                        src="https://images.unsplash.com/photo-1747901718105-bf9beb57ba3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                        alt=""
                        className="w-full h-48 object-cover bg-gray-200"
                    />
                    <div className="p-6 flex flex-col justify-between flex-1">
                        <p className="text-gray-700 mb-4 text-base">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, atque!
                        </p>
                        <button className="self-start px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition font-medium">
                            ❤️ Like : 24
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
);
};

export default Home;
