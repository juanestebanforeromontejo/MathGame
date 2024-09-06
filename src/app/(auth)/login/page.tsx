import Link from "next/link";

const page = () => {
  const linkToRegister = "/register";
  return (
<div className="flex items-center flex-col text-center">
      <h1 className="h1 text-gray-200">Login</h1>
      
      <div className="flex flex-col text-start bg-gray-900 rounded p-3">
        <h2 className="m-3 text-xl text-gray-300">User Name</h2>
        <input className="text-2xl text-gray-300 p-3 rounded bg-gray-800 w-full min-h-5 h-7"/>

        <h2 className="m-3 text-xl text-gray-300">Password</h2>
        <input className="text-2xl text-gray-300 p-3 rounded bg-gray-800 w-full min-h-5 h-7"/>

        <button className="w-full mt-5 text-2xl font-bold rounded bg-gray-800 text-gray-300">Login</button>
      </div>

      <p className="text-xl text-gray-300 m-3 ">Dont Have an account <Link href={linkToRegister} className="text-blue-500 animate-pulse">Register</Link></p>
    </div>
 )
}

export default page
