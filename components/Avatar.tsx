import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarImg({imgSrc}: {imgSrc: string | undefined}) {
  return (
    <Avatar>
      <AvatarImage src={imgSrc} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
