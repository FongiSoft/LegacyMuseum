import { db, eq, PC, User } from "astro:db";

export async function verifyUser(userID: number){
  const user = await db.select().from(User).where(eq(User.id, userID))

  if (user.length === 0) return false
  return true
}

export async function userHasSession(userID: number){
  const pcs = await db.select().from(PC).where(eq(PC.userID, userID));

  if (pcs.length === 0) return false
  return true
}