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
    </div>
  );
}
