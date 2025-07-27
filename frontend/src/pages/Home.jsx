import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data.posts);
      setposts(res.data.posts);
    });
  }, []);

  const navigate = useNavigate();
  return (
    <main className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen w-full p-2 sm:p-4">
      <section className="w-full max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 shadow-lg rounded-xl bg-white mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 tracking-tight">
            BookSook
          </h1>
          <button
            onClick={() => {
              navigate("/create-post");
            }}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition font-semibold"
          >
            + Create Post
          </button>
        </header>

        <div className="posts grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 w-full">
          {posts.map((post) => {
            return (
              <div
                key={post._id}
                className="post hover:scale-105 bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 hover:shadow-lg transition duration-200"
              >
                <div className="w-full h-70 bg-gray-100  rounded-lg overflow-hidden flex items-center justify-center mb-2">
                  <img
                    src={post.imageUrl}
                    alt={post.caption || "Post image"}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <p className="text-gray-800 text-center font-medium text-base mb-2 line-clamp-2">
                  {post.caption}
                </p>
                <button className="mt-auto px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow hover:from-blue-600 hover:to-purple-600 transition font-semibold">
                  ❤️ Likes: {post.likesCount}
                </button>
                <button
                  className="mt-1 px-3 py-1 bg-red-600 text-white rounded-md shadow hover:bg-red-600 transition font-semibold"
                  onClick={async () => {
                    try {
                      await axios.delete(`http://localhost:3000/posts/${post._id}`);
                      setposts(posts.filter((p) => p._id !== post._id));
                    } catch (err) {
                      alert("Failed to delete post" + err.message);
                    }
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
