
import { redirect } from "next/navigation";
import { FormSignUp } from "../components/FormSignUp"
import { checkFirstLogin } from "../utils/checkFirstLogin"


const page = async () => {

  const firstLogin = await checkFirstLogin()

  if(!firstLogin) {
    redirect('/dashboard')
  }
    return (
        <div >
            <FormSignUp/>
        </div>
    )
}

export default page