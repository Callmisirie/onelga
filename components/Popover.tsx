import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { AvatarImg } from "./Avatar"
import * as actions from "@/actions"

export function PopoverProfile({imgSrc, initName}: {
  imgSrc: string;
  initName: string | undefined
}) {
  return (
<Popover>
  <PopoverTrigger><AvatarImg imgSrc={imgSrc} initName={initName}/></PopoverTrigger>
  <PopoverContent>
    <form action={actions.signOut}>
      <Button type="submit" 
        variant={undefined}
        className="bg-white border shadow hover:shadow-lg text-black font-mono rounded-2xl">
          sign out
      </Button>        
    </form>
  </PopoverContent>
</Popover>

  )
}
