"use client";

export default function DynamicRoute({ params }) {
  return (
    <div className="bg-white text-black h-[calc(100dvh_-_24px)]">
      <h1>Dynamic Page</h1>
      <h2>Dynamic Routes Params: {params?.id}</h2>
    </div>
  );
}
