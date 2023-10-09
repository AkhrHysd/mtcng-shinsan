import {
    LoginButton,
    LogoutButton,
} from "@/app/components/loginButtons"

import {getServerSession} from "next-auth/next";
import {options} from "@/app/options";

export default async function Home() {
    const session = await getServerSession(options)
    const user = session?.user // ログインしていなければnullになる。

    return (
        <main>
            <div>
                <div>{`${JSON.stringify(user)}`}</div>
                {user ? <div>Logged in</div> : <div>Not logged in</div>}
                {user ? <LogoutButton/> : <LoginButton/>}
            </div>
        </main>
    );
}