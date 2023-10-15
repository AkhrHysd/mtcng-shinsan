import {
    LoginButton,
    LogoutButton,
} from "@/app/components/loginButtons"
import { findUserByEmail } from '../../../prisma/user'

import {getServerSession} from "next-auth/next";
import {options} from "@/app/options";

export default async function Home() {
    const session = await getServerSession(options)
    const user = session?.user

        const userData = await findUserByEmail(session?.user?.email || '')

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