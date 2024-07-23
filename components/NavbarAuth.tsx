import { useSession } from "next-auth/react";
import { PopoverProfile } from "./Popover";
import { Button } from "./ui/button";
import * as actions from "@/actions"


const NavbarAuth = () => {
  const session = useSession();  
  const nameInit = session?.data?.user?.name!

  return (
    session.status === "loading" 
    ? null 
    : session?.data?.user ? (
      <div className="absolute right-4 bottom-4 flex items-center">
        <PopoverProfile 
          imgSrc={session?.data?.user.image!} 
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