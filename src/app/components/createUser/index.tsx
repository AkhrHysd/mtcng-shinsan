
'use server'
import { prisma } from "../../../../prisma/prisma"

export const createUser = async (submit: FormData) => {
    // TODO: 成功したらSuccessを返し、失敗したらErrorを返す
    // TODO: IDをインクリメントするのを調べる（Supabase側でやってくれるはず）
    await prisma.user.create({
      data: {
        id: 113,
        email: submit.get('email')?.toString(),
        role: 'any',
        name: submit.get('firstName')?.toString() || '' + submit.get('familyName')?.toString()|| '',
      }
      })
  }