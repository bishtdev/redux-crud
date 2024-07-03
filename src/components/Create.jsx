import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const getUserData = (e) => {
    setUsers({...users, [e.target.name]: e.target.value });

  
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(users)
    dispatch(createUser(users))
    navigate("/read")
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-[#695557]">
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl flex">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-lg font-semibold">Your Information</h3>
            <div>
              <label className="block py-1">Your Name</label>
              <input
                type="text"
                name="name"
                onChange={getUserData}
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
                onChange={getUserData}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div>
              <label className="block py-1">age</label>
              <input
                type="age"
                name="age"
                onChange={getUserData}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div>
              <input name="gender" type="radio" value="male" onChange={getUserData} />
              <label htmlFor=""> male </label>
            </div>
            <div>
              <input name="gender" type="radio" value="female" onChange={getUserData} />
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

export default Create;
