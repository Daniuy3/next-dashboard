"use client"

import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, initCounterState } from "@/store/counter/counterSlice";
import { useEffect } from "react";


interface Props {
  value?: number;
}

interface CounterResponse {
  count: number;
}

const getApiCounter  = async () => {
  const data = await fetch("/api/counter")
               .then(res => res.json())
  
  return data as CounterResponse
}

export const CartCounter = ({value = 0} : Props) => {

  
  const count = useAppSelector((state) => state.counter.count)
  const dispatch = useAppDispatch()
  
 /*  useEffect(() => {
    dispatch(initCounterState(value))
  }, [dispatch, value])
 */

  useEffect(() => {
    getApiCounter()
        .then(data => {
          dispatch(initCounterState(data.count))
        })
  }, [dispatch])
  
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-3">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          /* onClick={() => handleClick(1)} */
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
         /*  onClick={() => handleClick(-1)} */
         onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
    </>
  );
};
