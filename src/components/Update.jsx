import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  // Initialize updateData with default values
  const [updateData, setUpdateData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'male', // Or set a default gender
  });

  useEffect(() => {
    if (id) {
      const singleUser = users.find((ele) => ele.id === id);
      if (singleUser) {
        setUpdateData(singleUser);
      }
    }
  }, [id, users]);

  const handleInputChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-[#695557]">
      <form onSubmit={handleUpdate}>
        <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white border rounded-lg shadow-2xl flex">
          <div className="max-w-md mx-auto space-y-3">
            <h3 className="text-xl font-semibold">Edit Your Information</h3>
            <div>
              <label className="block py-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={updateData.name || ''}
                onChange={handleInputChange}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div>
              <label className="block py-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={updateData.email || ''}
                onChange={handleInputChange}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div>
              <label className="block py-1">Age</label>
              <input
                type="number"
                name="age"
                value={updateData.age || ''}
                onChange={handleInputChange}
                className="border w-full py-2 px-2 rounded shadow hover:border-indigo-600 ring-1 ring-inset ring-gray-300 font-mono"
              />
            </div>
            <div>
              <input
                name="gender"
                type="radio"
                value="male"
                checked={updateData.gender === "male"}
                onChange={handleInputChange}
              />
              <label> Male </label>
            </div>
            <div>
              <input
                name="gender"
                type="radio"
                value="female"
                checked={updateData.gender === "female"}
                onChange={handleInputChange}
              />
              <label> Female </label>
            </div>
            <div className="flex gap-3 pt-3 items-center">
              <button className="border hover:border-indigo-600 px-4 py-2 rounded-lg shadow ring-1 ring-inset ring-gray-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
