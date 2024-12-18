import { and, db, eq, PC } from "astro:db";

export default async function searchPC(areaID: number){
  const pcs = await db.select().from(PC).where(
    and(
      eq(PC.statusID, 1),
      eq(PC.areaID, areaID)
    )
  )

  return pcs;
}