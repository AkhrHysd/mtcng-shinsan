import { findUserByEmail } from '../../prisma/user'
import {getServerSession} from "next-auth/next";
import {options} from "@/app/options";
import { redirect } from "next/navigation";
import { authCheck } from './utils/authCheck';
import { checkFirstLogin } from './utils/checkFirstLogin';

const Page = async () => {
  const auth = await authCheck()
  const firstLogin = await checkFirstLogin()

  if(!auth) {
    redirect('/dashboard')
  } else if (firstLogin) {
    redirect('/signup')
  } else {
    redirect('/login')
  }

}

export default Page