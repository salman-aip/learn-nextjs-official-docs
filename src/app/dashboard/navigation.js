"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink() {
  //checking active links
  // get the current route
  const Pathname = usePathname();
  console.log(Pathname);

  return (
    <div className="w-48 mx-auto flex justify-between">
      <Link href="/#A" scroll={false} className="bg-white p-2">
        A
      </Link>
      <Link href="/#B" scroll={false} className="bg-white p-2">
        B
      </Link>
      <Link href="/#C" scroll={false} className="bg-white p-2">
        C
      </Link>
      <Link href="/#D" scroll={false} className="bg-white p-2">
        D
      </Link>
      <Link href="/#E" scroll={false} className="bg-white p-2">
        E
      </Link>
      <a href="#F" className="bg-white p-2">
        F
      </a>
    </div>
  );
}
