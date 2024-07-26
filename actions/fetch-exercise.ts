"use server"

import { db } from "@/db";

export async function fetchExercise() {
  // await db.exercise.deleteMany() // use to clear list when testing

  const response = await db.exercise.findMany()

  return response
}
