import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Modals } from "./Modals";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [popUp, setPopUp] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return (
      <h2 className="text-center font-extrabold text-5xl text-[#695557]">
        {" "}
        Loading....
      </h2>
    );
  }

  return (
    <>
      {popUp && <Modals id={id} popUp={popUp} setPopUp={setPopUp} />}
      {users &&
        users.map((ele) => (
          <div
            key={ele.id}
            className="relative flex  max-w-[250px] md:max-w-md lg:max-w-[390px]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-4"
          >
            <div className="p-4 md:p-6">
              <h5 className="mb-2 block font-sans text-lg md:text-xl font-extrabold leading-snug tracking-normal text-[#695557] antialiased">
                {ele.name}
              </h5>
              <p className="block font-sans text-sm md:text-base font-bold leading-relaxed text-inherit antialiased text-slate-500">
                {ele.email}
              </p>
              <p className="block font-sans text-sm md:text-base font-bold leading-relaxed text-inherit antialiased text-slate-500">
                Gender: {ele.gender}
              </p>
            </div>
            <div className="p-4 md:p-6 pt-0">
              <button
                className="select-none rounded-lg bg-brown-gradient py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#7e4f42] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full md:w-auto md:mr-3 mb-2"
                type="button"
                data-ripple-light="true"
                onClick={() => [setId(ele.id), setPopUp(true)]}
              >
                View
              </button>
              <button
                className="select-none rounded-lg bg-brown-gradient py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#7e4f42] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full md:w-auto md:mr-3 mb-2"
                type="button"
                data-ripple-light="true"
              >
                Edit
              </button>
              <Link onClick={()=> dispatch(deleteUser(ele.id))}>
              <button
                className="select-none rounded-lg bg-brown-gradient py-2 md:py-3 px-4 md:px-6 text-center align-middle font-sans text-xs md:text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#7e4f42] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full md:w-auto mb-2"
                type="button"
                data-ripple-light="true"
              >
                Delete
              </button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Read;
