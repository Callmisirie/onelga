"use server"

import type { Exercise } from "@prisma/client";
import { auth } from "@/auth";
import { db } from "@/db";

interface authMessageProps {
  message: string;
  success: boolean;
}

export async function createExercise(formData: FormData) {
  const title = formData.get("exercise");
  const goalTarget = formData.get("goal");
  
  let authMessage: authMessageProps

  const session = await auth();

  if (!session || !session.user) {
    authMessage = { 
      message: "user not logged in",
      success: false
    }
    return authMessage;
  }

  try {
    await db.exercise.create({
      data: {
        title: title as string,
        goalTarget: goalTarget as string,
        currentTarget: "nothing",
        userId: session.user.id // Make sure to link the exercise to the user
      }
    });
    authMessage = { 
      message: "successfully saved exercise",
      success: true
    }
    return authMessage;
  } catch (error) {
    console.error(error); // Log the error for debugging
    authMessage = { 
      message: "error saving exercise",
      success: false
    }
    return authMessage;
  }
}
