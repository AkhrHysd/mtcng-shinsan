import { findUserByEmail } from '../../prisma/user'
import {getServerSession} from "next-auth/next";
import {options} from "@/app/options";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getServerSession(options)
  const user = session?.user

  const userData = await findUserByEmail(session?.user?.email || '')
  console.log(userData)

  if(user) {
    redirect('/dashboard')
  } else {
    redirect('/login')
  }

}

export default Page