"use client"

import { useState } from "react";


interface Props {
  value?: number;
}

export const CartCounter = ({value = 10} : Props) => {
  const [counter ,setCounter]  = useState(value)

  const handleClick = (by : number) => {
    setCounter(counter + by)
  }
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-3">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => handleClick(1)}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => handleClick(-1)}
        >
          -1
        </button>
      </div>
    </>
  );
};
