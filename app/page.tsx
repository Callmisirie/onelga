import { TextGenerateEffectLayout } from "@/components/TextGenerateEffect";
import { ExerciseCreateForm } from "@/components/exercise/ExerciseCreateForm";

export default async function Home() {
  
  return (
    <div className="min-h-svh">
      <div className="flex flex-col items-center w-full justify-center py-10 gap-5 font-mono tracking-tighter">
        <TextGenerateEffectLayout />
        <ExerciseCreateForm />        
      </div>
    </div>
  );
}
