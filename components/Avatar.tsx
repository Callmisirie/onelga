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
      <AvatarImage src={imgSrc} alt="profile image" />
      <AvatarFallback>{initName}</AvatarFallback>
    </Avatar>
  )
}
