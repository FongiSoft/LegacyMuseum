import type { ConvertedData } from "@customTypes/Users";

export function convertUserDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | Date | null)[]) => {
    return {
      employeeID: Number(row[10]),
      name: row[1] as string,
      paternalSurname: row[2] as string,
      maternalSurname: row[3] as string,
      phone: Number(row[4]),
      email: row[5] as string,
      dateOfBirth: row[6] as Date,
      passwrd: row[9] !== null ? String(row[9]) : ""
    };
  });
};