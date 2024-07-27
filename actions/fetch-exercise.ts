"use server"

import { auth } from "@/auth";
import { db } from "@/db";

export async function fetchExercise() {
  // await db.exercise.deleteMany() // use to clear list when testing

  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return []; // or throw new Error("User not authenticated");
  }
  
  const response = await db.exercise.findMany({
    where: {
      userId: userId
    }
  })

  return response
}
