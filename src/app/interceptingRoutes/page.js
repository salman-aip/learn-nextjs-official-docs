"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { getPhotos } from "@/lib/unsplash";

export default function InterceptionRoutesPage() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((res) => {
      setPhotos(res);
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <h1 className="text-center">Intercepting Routes Page</h1>

      {!!photos && (
        <div className="grid grid-cols-3 place-items-center gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="aspect-1 overflow-hidden">
              <Link href={`/interceptingRoutes/photo/${photo.id}`} prefetch>
                <Image
                  src={photo?.urls?.regular}
                  width={600}
                  height={600}
                  alt={photo.alt_description}
                  className="h-full object-cover object-center"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
