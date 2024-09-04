"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/register");

  return (
    <div className="flex text-center">
   
    </div>
  );
}
