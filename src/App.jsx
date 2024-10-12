import { useState } from "react";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold underline text-orange-600">
        Welcome to Homepage
      </h1>
      <div class=" w-[400px] py-12 mx-auto">
        <h2 class="text-2xl font-bold">Add New User</h2>
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Full name</span>
              <input
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Email address</span>
              <input
                type="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Date of Birth</span>
              <input
                type="date"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Gender</span>
              <select class="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">About Yourself</span>
              <textarea
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="3"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
