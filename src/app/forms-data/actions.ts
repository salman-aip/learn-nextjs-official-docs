"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function create(formData: FormData) {
  //mutate data
  // revalidate cache
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  // validate form data and save to database
  console.log({ name, email, password });
}
