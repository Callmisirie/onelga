"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createExercise } from "@/actions"
import FormButton from "../FormButton"


const formSchema = z.object({
  exercise: z.string().min(2, {
    message: "Exercise must be at least 2 characters.",
  }),
  goal: z.string().min(1, {
    message: "Goal must be at least 1 characters.",
  }),
})

export function ExerciseCreateForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      exercise: "",
      goal: "",
    },
  })

  const {isSubmitting} = form.formState

  // Define the submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Convert the form values to a FormData object
    const formData = new FormData()
    formData.append("exercise", values.exercise)
    formData.append("goal", values.goal)

    // Use the FormData object with createExercise function
    await createExercise(formData)

    // Log the values for debugging
    console.log(values)
  }

  return (
    <div className="flex w-fit border p-8 rounded-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="exercise"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Exercise</FormLabel>
                <FormControl>
                  <Input placeholder="exercise" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display exercise.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Goal</FormLabel>
                <FormControl>
                  <Input placeholder="goal" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display goal.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormButton isSubmitting={isSubmitting}/>
        </form>
      </Form>      
    </div>

  )
}
