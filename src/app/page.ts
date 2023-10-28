
import { redirect } from "next/navigation";
import { authCheck } from './utils/authCheck';
import { checkFirstLogin } from './utils/checkFirstLogin';

const Page = async () => {
  const auth = await authCheck()
  const firstLogin = await checkFirstLogin()

  if(!auth) {
    redirect('/login')
  } else if (firstLogin) {
    redirect('/signup')
  } else {
    redirect('/dashboard')
  }

}

export default Page