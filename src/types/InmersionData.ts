// Tipo original de los datos de inmersión
export type ImmersionData = {
    immersionID: number;          // ID único de la inmersión
    immersionTypeID: number;      // ID del tipo de inmersión
    NombreResponsableID: number;
    ApellidoPResponsableID: number;
    ApellidoMResponsableID: number;
    SalaLimpiaID: number;
    SalaEscaneadaID: number;
    RevisionFisicaID: number;          
    immersionDate: Date;          // Fecha de la inmersión
    immersionStatusID: number;    // Estado de la inmersión (1 = Activa, 2 = Completada, etc.)
    immersionTime: number;        // Tiempo de inmersión en minutos
    NombreResponsableCierreID: number;
    ApellidoPResponsableCierreID: number;
    ApellidoMResponsableCierreID: number;
    HoraID: number; 
  };
  
  // Tipo para los datos convertidos a formato más manejable
  export interface ConvertedImmersionData {
    immersionID: string;          // Convertido a string
    immersionTypeID: string;      // Convertido a string
    NombreResponsableID: string;
    ApellidoPResponsableID: string;
    ApellidoMResponsableID: string;
    SalaLimpiaID: string;
    SalaEscaneadaID: string;
    RevisionFisicaID: string;  
    immersionDate: string;        // Fecha en formato ISO string
    immersionStatusID: string;    // Convertido a string
    immersionTime: number;        // Mantiene el tipo numérico
    NombreResponsableCierreID: string;
    ApellidoPResponsableCierreID: string;
    ApellidoMResponsableCierreID: string;
    HoraID: string;
  }
  