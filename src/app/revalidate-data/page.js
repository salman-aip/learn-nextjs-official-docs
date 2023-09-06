import React from "react";

async function getData() {
  // time-based revalidate
  const res = fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 1 },
  });

  if (!(await res).ok) {
    throw new Error("Failed to fetch data");
  }

  console.log("revalidate");
  return (await res).json();
}

export default async function fetchDataPage() {
  const data = await getData();

  return <h1>revalidate data</h1>;
}
