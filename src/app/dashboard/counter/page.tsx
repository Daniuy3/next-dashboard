"use client"

import { useState } from "react"

export default function CounterPage  () {
  const [counter ,setCounter]  = useState(0)
  return (
    <main className="grid place-items-center">
        <div className="flex space-x-4">
            <button
              onClick={() => setCounter(counter + 1)}
            >
              +1
            </button>
            <p>
              {counter}
            </p>
        </div>
    </main>
  )
}

