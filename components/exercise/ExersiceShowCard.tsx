"use client"

import { useEffect, useState } from "react";
import { fetchExercise } from "@/actions";
import type { Exercise } from "@prisma/client";
import { clearInterval, setInterval } from "timers";

const ExerciseShowCard = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response: Exercise[] = await fetchExercise();
        console.log(response);
        setExercises(response); // Update state here
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    // Fetch exercises immediately on component mount
    fetchExercises();

    // Set up an interval to fetch exercises every 5 seconds
    const intervalId = setInterval(() => {
      fetchExercises();
    }, 10000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly items-center gap-10 w-fit mt-10">
      {exercises?.map((exercise) => (
        <div
          key={exercise.id}
          className="flex flex-col items-center p-4 rounded-2xl border w-fit h-full shadow-lg"
        >
          <h2 className="font-semibold">{exercise.title}</h2>
          <div className="flex flex-col items-start p-4 border border-gray-200 rounded-3xl gap-2 w-full">
            <p className="text-center">Target: <span className="text-sm text-gray-500">{exercise.goalTarget}</span></p>
            <div className="border border-gray-100 w-full" />
            <p>Current: <span  className="text-sm text-gray-500">{exercise.currentTarget}</span></p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ExerciseShowCard;
