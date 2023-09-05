"use client";

import { getPhoto } from "@/lib/unsplash";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DynamicSinglePhoto({ params }) {
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    getPhoto(params.id).then((res) => setPhoto(res));
  }, [params]);

  return (
    <>
      <div className="mx-auto max-h-[800px] w-[600px] overflow-hidden bg-white">
        <div className="h-[600px] w-[600px]">
          <Image
            src={photo?.data?.urls?.regular}
            width={600}
            height={600}
            alt={photo?.data?.alt_description}
            className="h-[750px] w-[750px] object-cover"
            priority
          />
        </div>

        <div className="p-2">
          <h3 className="text-2xl font-semibold text-gray-800">{photo?.data?.user?.name}</h3>
          <h4 className="text-lg font-normal text-gray-600">
            Taken by{" "}
            <a
              href={`https://www.instagram.com/${photo?.data?.user?.social?.instagram_usernamem}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700"
            >
              {`@${photo?.data?.user?.social?.instagram_username}`}
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}
