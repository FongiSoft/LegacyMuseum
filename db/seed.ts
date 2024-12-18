import { Area, db, Major, PC, User, Status } from 'astro:db';

export default async function seed() {
	await db.insert(Area).values([
    { id: 1, name: "Asesoria" },
    { id: 2, name: "Sala 1" },
    { id: 3, name: "Sala MAC" },
    { id: 4, name: "Sala 3" },
    { id: 5, name: "Sala 4" },
  ]);
	
  await db.insert(Status).values([
    { id: 1, name: "libre" },
    { id: 2, name: "baja" },
    { id: 3, name: "en uso" },
    { id: 4, name: "en mantenimiento" },
  ]);

  await db.insert(Major).values([
    { id: 1, name: "Ingeniería de software" },
    { id: 2, name: "Ingeniería mecatronica" },
  ])
  
	await db.insert(User).values([
    { id: 20106746, fullName: "Jorge Gabriel García Osorio", majorID: 1,},
    { id: 20109625, fullName: "Edgar Torres Nuñez", majorID: 1,},
  ])
	
	await db.insert(PC).values([
    {
			id: 1,
			name: "PC-1",
			areaID: 1,
		},
    {
			id: 2,
			name: "PC-2",
			areaID: 2,
      userID: 1
		},
  ])
}
