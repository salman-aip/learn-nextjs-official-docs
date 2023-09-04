import { NextResponse } from "next/server";

export const GET = async () => {
  const res = await fetch(
    "https://api.unsplash.com/photos/?client_id=9LshQR5BF1bI7agAqN_T_E5jHp5fXxkP16opnaMWzes",
    {
      headers: {
        "Content-Type": "application/json",
        client_id: process.env.UNSPLASH_ACCESS_KEY,
      },
    },
  );

  const data = await res.json();

  return NextResponse.json({ data });
};

export const POST = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Salman",
      body: "Hey.. !!!",
      userId: 78453,
    }),
  });

  const data = await res.json();

  return NextResponse.json(data, { status: 201 });
};

export const GET2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
};
