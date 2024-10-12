import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const handleAddNewUser = (event) => {
    event.preventDefault();
    // Add new user logic here
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const dob = new Date(form.get("dob")).toISOString();
    const gender = form.get("gender");

    const user = { name, email, dob, gender };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // Ensure that the parsed response is returned
      })
      .then((data) => {
        console.log("Server response:", data); // This will now log the correct server response
      })
      .catch((error) => console.error("Error posting user:", error));
  };

  return (
    <>
      <h1 className="text-2xl pt-5 text-center font-bold underline text-orange-600">
        <Link to="/users">View All Users</Link>
      </h1>
      <div className=" w-[400px] py-3 mx-auto">
        <h2 className="text-2xl font-bold">Add New User</h2>
        <div className="mt-4 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <form onSubmit={handleAddNewUser}>
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
                  name="name"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Date of Birth</span>
                <input
                  name="dob"
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Gender</span>
                <select
                  name="gender"
                  className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>

              <button
                type="submit"
                className="bg-red-400 text-white hover:bg-orange-600 px-4 py-2 my-3"
              >
                Add New User
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
