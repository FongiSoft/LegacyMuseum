import { column, defineDb, defineTable, NOW } from 'astro:db';

const Area = defineTable({
  columns: {
    id: column.number({ unique: true}),
    name: column.text({ default: "Sala -" }),
    _createdAt: column.date({ default: NOW })
  }
})

const Status = defineTable({
  columns: {
    id: column.number({ unique: true}),
    name: column.text(),
    _createdAt: column.date({ default: NOW })
  }
})

const Major = defineTable({
  columns: {
    id: column.number({ unique: true}),
    name: column.text({ default: "Ingeniería de Software" }),
    _createdAt: column.date({ default: NOW })
  }
})

const User = defineTable({
  columns: {
    id: column.number({ unique: true}),
    fullName: column.text({ default: "John Doe" }),
    majorID: column.number(),
    _createdAt: column.date({ default: NOW })
  },
  foreignKeys: [
    {
      columns: ["majorID"],
      references: () => [Major.columns.id],
    },
  ],
})

const PC = defineTable({
  columns: {
    id: column.number({ unique: true,}),
    name: column.text({ default: "PC" }),
    areaID: column.number(),
    userID: column.number({ optional: true }),
    statusID: column.number({ default: 1 }),
    _createdAt: column.date({ default: NOW })
  },
  foreignKeys: [
    {
      columns: ["areaID"],
      references: () => [Area.columns.id],
    },
  ],
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Area,
    Status,
    Major,
    User,
    PC
  }
});
