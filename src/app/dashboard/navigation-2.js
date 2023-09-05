"use client";

import { useRouter } from "next/navigation";

export default function NavigationUseRouter() {
  const router = useRouter();

  return (
    <div className="w-24 mx-auto mt-4 bg-yellow-500 px-3 py-2" onClick={() => router.push("/")}>
      Home
    </div>
  );
}
