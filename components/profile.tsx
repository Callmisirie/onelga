"use client"

import { useSession } from "next-auth/react"

const Profile = () => {
  const session = useSession();
  const status = session.data?.user ? "Signed In" : "Signed Out"

  console.log(status);
  

  return (
    <div>
      <h2>Client is - {status}</h2>
    </div>
  )
}

export default Profile