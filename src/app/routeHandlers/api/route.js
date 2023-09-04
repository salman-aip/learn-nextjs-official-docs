import { cookies, headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const token2 = request.cookies.get("token");

  const headersList = headers();
  const referer = headersList.get("referer");

  console.log(searchParams, id, cookieStore.token, token2, headersList, referer);

  const res = await fetch(
    "https://api.unsplash.com/photos/?client_id=9LshQR5BF1bI7agAqN_T_E5jHp5fXxkP16opnaMWzes",
    { next: { revalidate: 10 } },
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
