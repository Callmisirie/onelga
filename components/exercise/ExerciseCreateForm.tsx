"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { useState } from "react"


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

  const {reset, formState: {isSubmitting}} = form
  const [authMessage, setAuthMessage] = useState({message: "", success: false})

  // Define the submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Convert the form values to a FormData object
    const formData = new FormData()
    formData.append("exercise", values.exercise)
    formData.append("goal", values.goal)

    // Use the FormData object with createExercise function
    const response = await createExercise(formData)

    setAuthMessage(response)

    setTimeout(() => {
      setAuthMessage({message: "", success: false})
    }, 5000);

    reset()

    // Log the values for debugging
    console.log(values)
  }

  return (
    <div className="flex flex-col items-center w-fit border p-8 rounded-2xl">
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
      {authMessage.message && (
        <div className={`${authMessage.success 
        ? "bg-green-200 border-green-600" 
        : "bg-red-200 border-red-600"} border rounded-3xl px-2 py-1 mt-4`}>
          <p className={`${authMessage.success 
            ? " text-green-600" 
            : " text-red-600"} text-center`}>
              {authMessage.message}
          </p>          
        </div>        
      )}
    </div>

  )
}
