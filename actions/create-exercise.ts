"use server"

export async function createExercise(formData: FormData) {
  const title = formData.get("exercise");
  const goalTarget = formData.get("goal");

  console.log({
    title,
    goalTarget
  });  
}
