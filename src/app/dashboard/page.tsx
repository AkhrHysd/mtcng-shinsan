import { LogoutButton } from "../components/loginButtons";
import { authCheck } from "../utils/authCheck";
import { redirect } from "next/navigation";
import { checkFirstLogin } from "../utils/checkFirstLogin";

export default async function Home() {
    // const auth = await authCheck()
    // const firstLogin = await checkFirstLogin()
    // if(!auth) {
    //     redirect('/login')
    // } else if (firstLogin) {
    //     redirect('/signup')
    // }

    return (
        <main>
            dashboard


            <LogoutButton/>
        </main>
    );
}