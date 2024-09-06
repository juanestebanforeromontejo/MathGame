"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const linkToLogin = "/login"

  function handleUserName(input: string) {
    setUserName(input);
    return
  }

  function handlePassword(input: string) {
    setPassword(input);
    return
  }
  return (
    <div className="flex items-center flex-col text-center">
      <h1 className="h1 text-gray-200">register</h1>
      
      <div className="flex flex-col text-start bg-gray-900 rounded p-3">
        <h2 className="m-3 text-xl text-gray-300">User Name</h2>
        <input className="text-2xl text-gray-300 p-3 rounded bg-gray-800 w-full min-h-5 h-7" onChange={e => handleUserName(e.target.value)}/>
        <h2 className="m-3 text-xl text-gray-300">Password</h2>
        <input className="text-2xl text-gray-300 p-3 rounded bg-gray-800 w-full min-h-5 h-7" onChange={e => handlePassword(e.target.value)}/>

        <button className="w-full mt-5 text-2xl font-bold rounded bg-gray-800 text-gray-300">Register</button>
      </div>

      <p className="text-xl text-gray-300 m-3 ">Have an account  already <Link href={linkToLogin} className="text-blue-500 animate-pulse">Login</Link></p>
    </div>
  )
}

export default Page
