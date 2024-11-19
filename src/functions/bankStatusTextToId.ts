export default function bankStatusTextToId(statusText: string): string {
    const statusMapping: { [key: string]: string } = {
      "cancelada": "6",
      "en tramite": "7",
      "vigente": "8"
    };
  
    return statusMapping[statusText] || 'Estado No encontrado';
  }