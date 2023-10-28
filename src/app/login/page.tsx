import {
    LoginButton,
} from "@/app/components/loginButtons"
import { checkFirstLogin } from "../utils/checkFirstLogin"
import { redirect } from "next/navigation"

const page = async () => {

  const firstLogin = await checkFirstLogin()

  if(firstLogin) {
    redirect('/signup')
  }
    return (
        <LoginButton />
    )
}

export default page