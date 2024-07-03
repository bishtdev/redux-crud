import React from "react";
import { useSelector } from "react-redux";

export const Modals = ({ id, popUp, setPopUp }) => {

    const allusers = useSelector((state)=> state.app.users)

    const singleUser = allusers.filter((ele) => ele.id === id)






  return (
    <div className="fixed bg-black top-0 bottom-0 left-0 right-0 flex justify-center items-center z-30 opacity-90">
      <div className="bg-white p-4 rounded-lg h-[300px] w-[300px] text-center ">
       <button 
        className="font-extrabold bg-brown-gradient
        text-lg py-2 px-4 rounded-md border border-black"
        onClick={()=> setPopUp(false)}
        > CLOSE </button>
       <h1 className="text-xl mt-3 text-left "> Name: {singleUser[0].name}</h1>
       <h1 className="text-xl mt-3 text-left "> Email: {singleUser[0].email}</h1>
       <h1 className="text-xl mt-3 text-left "> Age: {singleUser[0].age}</h1>
       <h1 className="text-xl mt-3 text-left "> Gender: {singleUser[0].gender}</h1>
      </div>
    </div>
  );
};
