import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);
  
  const newData = (e) =>{
    setUpdateData({...updateData, [e.target.name]: e.target.value})
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-[#695557]">
      <form
      //   onSubmit={handleSubmit}
      >
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl flex">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-xl font-semibold">Edit Your Information</h3>
            <div>
              <label className="block py-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={updateData && updateData.name}
                // onChange={getUserData}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
              <p className="text-sm mt-2 px-2 hidden text-gray-600">
                Text helper
              </p>
            </div>
            <div>
              <label className="block py-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={updateData && updateData.email}
                // onChange={getUserData}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div>
              <label className="block py-1">age</label>
              <input
                type="age"
                name="age"
                value={updateData && updateData.age}
                // onChange={getUserData}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div>
              <input
                name="gender"
                type="radio"
                value="male" 
                checked={updateData && updateData.gender === "male"}
                // onChange={getUserData}
              />
              <label htmlFor=""> male </label>
            </div>
            <div>
              <input
                name="gender"
                type="radio"
                value="female"
                checked={updateData && updateData.gender === "female"}
                // onChange={getUserData}
              />
              <label htmlFor=""> female </label>
            </div>
            <div className="flex gap-3 pt-3 items-center">
              <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
                submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
