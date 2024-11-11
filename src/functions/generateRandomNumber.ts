export function generateRandomNumber(digits: number): string {
  if (digits <= 0) {
    throw new Error("El número de dígitos debe ser mayor que 0.");
  }

  // Generar un número con la cantidad de dígitos especificada
  let randomNumber = "";

  // Asegurar que el primer dígito no sea 0
  randomNumber += Math.floor(Math.random() * 9) + 1;

  // Generar los dígitos restantes
  for (let i = 1; i < digits; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }

  return randomNumber;
}
