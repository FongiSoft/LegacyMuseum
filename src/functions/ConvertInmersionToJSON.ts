import type { ConvertedImmersionData } from "@customTypes/InmersionData"; // Asegúrate que la ruta y nombre son correctos

export default function convertImmersionDataToJSON(data: DBData): ConvertedImmersionData[] {
  return data.rows.map((row: (string | number | null | Date)[]) => {
    return {
      immersionID: row[0] ? String(row[0]) : "0", // ID de la inmersión
      immersionTypeID: row[1] ? String(row[1]) : "0", // ID del tipo de inmersión
      NombreResponsableID: row[2] ? String(row[2]) : "0", // Nombre del responsable
      ApellidoPResponsableID: row[3] ? String(row[3]) : "0", // Apellido paterno del responsable
      ApellidoMResponsableID: row[4] ? String(row[4]) : "0", // Apellido materno del responsable
      SalaLimpiaID: row[5] ? String(row[5]) : "0", // ID de la sala limpia
      SalaEscaneadaID: row[6] ? String(row[6]) : "0", // ID de la sala escaneada
      RevisionFisicaID: row[7] ? String(row[7]) : "0", // ID de la revisión física
      immersionDate: row[8] instanceof Date ? row[8].toISOString() : String(row[8]), // Fecha de la inmersión
      immersionStatusID: row[9] ? String(row[9]) : "0", // Estado de la inmersión
      immersionTime: typeof row[10] === "number" ? row[10] : 0, // Tiempo de inmersión
      NombreResponsableCierreID: row[11] ? String(row[11]) : "0", // Nombre del responsable al cierre
      ApellidoPResponsableCierreID: row[12] ? String(row[12]) : "0", // Apellido paterno del responsable al cierre
      ApellidoMResponsableCierreID: row[13] ? String(row[13]) : "0", // Apellido materno del responsable al cierre
      HoraID: row[14] ? String(row[14]) : "0", // ID de la hora de inmersión
    };
  });
}

export function convertCustomerDataToJSON(data: DBData): ConvertedImmersionData[] {
  return data.rows.map((row: (string | number | null | Date)[]) => {
    return {
      immersionID: row[0] ? String(row[0]) : "0", // ID de la inmersión
      immersionTypeID: row[1] ? String(row[1]) : "0", // ID del tipo de inmersión
      NombreResponsableID: row[2] ? String(row[2]) : "0", // Nombre del responsable
      ApellidoPResponsableID: row[3] ? String(row[3]) : "0", // Apellido paterno del responsable
      ApellidoMResponsableID: row[4] ? String(row[4]) : "0", // Apellido materno del responsable
      SalaLimpiaID: row[5] ? String(row[5]) : "0", // ID de la sala limpia
      SalaEscaneadaID: row[6] ? String(row[6]) : "0", // ID de la sala escaneada
      RevisionFisicaID: row[7] ? String(row[7]) : "0", // ID de la revisión física
      immersionDate: row[8] instanceof Date ? row[8].toISOString() : String(row[8]), // Fecha de la inmersión
      immersionStatusID: row[9] ? String(row[9]) : "0", // Estado de la inmersión
      immersionTime: typeof row[10] === "number" ? row[10] : 0, // Tiempo de inmersión
      NombreResponsableCierreID: row[11] ? String(row[11]) : "0", // Nombre del responsable al cierre
      ApellidoPResponsableCierreID: row[12] ? String(row[12]) : "0", // Apellido paterno del responsable al cierre
      ApellidoMResponsableCierreID: row[13] ? String(row[13]) : "0", // Apellido materno del responsable al cierre
      HoraID: row[14] ? String(row[14]) : "0", // ID de la hora de inmersión
    };
  });
}