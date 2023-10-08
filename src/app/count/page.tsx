import prisma from '../lib/prisma'

export default async function Count() {
  const count = await prisma.user.count()
    return <div>Count: {count}</div>
  }