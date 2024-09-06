import Link from 'next/link'
import React from 'react'

const page = () => {
  const linkToPlay = "/start/play";

  return (
    <div className="text-center">
      <h1 className="h1 text-gray-300">Welcome to the Math Game</h1>

      <button className="p-3 m-3 text-gray-300 bg-gray-700 font-bold text-5xl rounded"><Link href={linkToPlay}>Play</Link></button>
    </div>
  )
}

export default page
