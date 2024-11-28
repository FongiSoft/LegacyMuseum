export default function bankStatusTextToId(statusText: string): string {
    const statusMapping: { [key: string]: string } = {
      "cancelada": "6",
      "Activa": "17"
    };
  
    return statusMapping[statusText] || 'Estado No encontrado';
  }