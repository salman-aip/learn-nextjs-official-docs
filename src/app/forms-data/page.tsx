"use server";

import React from "react";
import create from "./actions";

export default async function FormPage() {
  return (
    <form action={create} method="POST" className="flex flex-col bg-lime-300">
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Create Account</button>
    </form>
  );
}
