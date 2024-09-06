import Link from 'next/link'
import React from 'react'

const difficulties = [
  { difficulty: "easy", color: "bg-green-500"},
  { difficulty: "medium", color: "bg-yellow-600"},
  { difficulty: "hard", color: "bg-red-700"},
  { difficulty: "imposible", color: "bg-purple-800"},
]

const page = () => {
  return (
    <div>
      <h1 className="h1 text-gray-300">Select the difficulty</h1>

      <ul className="flex flex-col items-start">
        {difficulties.map((difficulty) => <button className={"text-2xl text-gray-300 m-3 rounded bg-gray-800 p-3 w-32 " + difficulty.color}
          key={difficulty.difficulty}>
          <Link href={"play/game/" + difficulty.difficulty}>{difficulty.difficulty}</Link>
        </button>)}
      </ul>
    </div>
  )
}

export default page
