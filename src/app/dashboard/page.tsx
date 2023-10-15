import { LogoutButton } from "../components/loginButtons";
import { authCheck } from "../utils/authCheck";
import { redirect } from "next/navigation";

export default async function Home() {
    const auth = await authCheck()
    if(!auth) {
        redirect('/login')
    }

    return (
        <main>
            dashboard


            <LogoutButton/>
        </main>
    );
}