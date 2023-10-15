import { getServerSession } from "next-auth"
import { options } from "../options"
import { findUserByEmail } from "../../../prisma/user"

export const checkFirstLogin = async () => {
    const session = await getServerSession(options)

    const userData = await findUserByEmail(session?.user?.email || '')


    if(!userData) {
        return true
    } else {
        return false
    }
}