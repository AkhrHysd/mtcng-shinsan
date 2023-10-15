import { getServerSession } from "next-auth";
import {options} from "@/app/options";
import { findUserByEmail } from "../../../prisma/user";

export const authCheck = async () => {
    const session = await getServerSession(options)
    const user = session?.user
    const userData = await findUserByEmail(session?.user?.email || '')
    console.error(userData)

    if (!user) {
        return false
    }
    return true
  }