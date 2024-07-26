"use client"

import { useEffect, useState } from "react";
import { fetchExercise } from "@/actions/fetch-exercise";
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
    <div className="flex flex-col items-center">
      {exercises?.map((exercise) => (
        <div
          key={exercise.id}
          className="flex flex-col items-center p-4 rounded-md border w-fit gap-4"
        >
          <h2>{exercise.title}</h2>
          <p>{exercise.goalTarget}</p>
          <p>{exercise.currentTarget}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseShowCard;
