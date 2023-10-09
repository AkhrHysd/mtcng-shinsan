import { prisma } from './prisma'

export const findUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })
    return user
  } catch (error) {
    console.error('Error finding user: ', error)
    throw error
  }
}




