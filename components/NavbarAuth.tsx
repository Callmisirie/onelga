import { useSession } from "next-auth/react";
import { PopoverProfile } from "./Popover";
import { Button } from "./ui/button";
import * as actions from "@/actions"
import { useEffect } from "react";


const NavbarAuth = () => {
  const {data: session, status} = useSession();  
  const nameInit = session?.user?.name!

  useEffect(() => {
    console.log(status);
  }, [status])
  
  return (
    status === "loading" 
    ? null 
    : session?.user ? (
      <div className="absolute right-4 bottom-4 flex items-center">
        <PopoverProfile 
          imgSrc={session?.user.image!} 
          initName={nameInit.slice(0, 1)}
        />
      </div>
    ):(
      <div className="absolute right-4 bottom-4">
        <form action={actions.signIn}>
          <Button type="submit" 
            variant={undefined}
            className="bg-white border shadow hover:shadow-lg text-black font-mono rounded-2xl">
              sign in
          </Button>        
        </form>
      </div>
    ) 
  )
}

export default NavbarAuth