
'use server'
import { prisma } from "../../../../prisma/prisma"

export const createUser = async (submit: FormData) => {
    try{
    await prisma.user.create({
      data: {
        email: submit.get('email')?.toString(),
        role: 'any',
        name: submit.get('firstName')?.toString() || '' + submit.get('familyName')?.toString()|| '',
      }
      })
      return {
        status: 'SUCCESS'
      }
    } catch(e) {
        return {
            status: 'ERROR',
        }
    }
  }