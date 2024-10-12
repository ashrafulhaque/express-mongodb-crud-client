import React from "react";
import { Link } from "react-router-dom";

const ViewAllUsers = () => {
  return (
    <>
      <h1 className="text-2xl pt-5 text-center font-bold underline text-orange-600">
        <Link to="/">Add New User</Link>
      </h1>
      <div className="w-[400px] py-3 mx-auto">
        <h2 className="text-2xl font-bold">View All Users</h2>
      </div>
    </>
  );
};

export default ViewAllUsers;
