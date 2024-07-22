import * as actions from "@/actions"
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import Profile from "@/components/profile";



export default async function Home() {
  const session = await auth();

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-6">
        <form action={actions.signIn}>
          <Button type="submit" className="bg-white border-black border text-black font-mono hover:text-white">signIn</Button>        
        </form>

        <form action={actions.signOut}>
          <Button type="submit" className="bg-white border-black border text-black font-mono hover:text-white">signOut</Button>        
        </form>
      </div>      
      <div className="flex justify-center mt-5 font-semibold">
        {session?.user ? (
          <div className="bg-white border-black border text-black font-mono p-2 rounded">{JSON.stringify(session.user)}</div>
        ): (
          <div className="bg-white border-black border text-black font-mono p-2 rounded">Signed Out</div>
        )}
      </div>
      <Profile />
    </div>
  );
}
