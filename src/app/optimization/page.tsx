"use client";

import Image from "next/image";

import img from "../../../public/abc.jpg";

export default function Optimization() {
  return (
    <div className="flex flex-col bg-white text-black">
      <div>Responsive Image</div>
      <Image
        src={img}
        alt={"responsive image"}
        // automatically set the width and height
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div>Fill Container Image</div>
      <Image
        src={img}
        alt={"responsive image"}
        sizes="(min-width: 500px) 50vw, 100vw"
        style={{
          objectFit: "cover",
        }}
      />

      {/* 
A boolean that causes the image to fill the parent element, which is useful when the width and height are unknown.
*/}

      {/* 
A placeholder to use while the image is loading.
*/}

      <div className="relative">
        Background Image
        <Image
          src={img}
          alt={"responsive image"}
          placeholder="blur"
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
            backgroundImage: `url(${img.src})`,
          }}
        />
      </div>
    </div>
  );
}
