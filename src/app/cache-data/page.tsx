import React from "react";

async function getData() {
  const res = fetch("https://jsonplaceholder.typicode.com/posts", { cache: "force-cache" });

  if (!(await res).ok) {
    throw new Error("Failed to fetch data");
  }

  console.log("cached");
  return (await res).json();
}

export default async function fetchDataPage() {
  const data = await getData();

  return <h1>fetch data</h1>;
}
