import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarImg({imgSrc, initName}: {
  imgSrc: string | undefined;
  initName: string | undefined;
}) {
  return (
    <Avatar>
      <AvatarImage src={imgSrc} alt="@shadcn" />
      <AvatarFallback>{initName}</AvatarFallback>
    </Avatar>
  )
}
