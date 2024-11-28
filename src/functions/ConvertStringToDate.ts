export default function convertStringToDate(dateString: string): Date | null {
  // Verifica si el formato es correcto usando una expresión regular
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    console.error("Formato de fecha incorrecto. Debe ser 'YYYY-MM-DD'.");
    return null;
  }

  const [year, month, day] = dateString.split("-").map(Number);
  
  // Devuelve una fecha, ajustando el mes (0-11 en JavaScript)
  return new Date(year, month - 1, day);
}
