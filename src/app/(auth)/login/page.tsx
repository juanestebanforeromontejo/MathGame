import Link from "next/link";

const page = () => {
  const linkToRegister = "/register";
  return (
    <div className="text-center">
      <h1 className="h1 text-gray-200">Login</h1>

      <div className="flex flex-col space-y-1 text-start">
        <h2 className="m-3 text-xl text-gray-300">User Name</h2>
        <input className="text-2xl text-gray-300 p-3 m-3 rounded bg-gray-800 w-full min-h-15 h-20"/>

        <h2 className="m-3 text-xl text-gray-300">Password</h2>
        <input className="text-2xl text-gray-300 p-3 m-3 rounded bg-gray-800 w-full min-h-15 h-20"/> 
      </div>

      <p className="text-xl text-gray-300 m-3 ">Don't Have an account <Link href={linkToRegister} className="text-blue-500 animate-pulse">Register</Link></p>
    </div>
  )
}

export default page
