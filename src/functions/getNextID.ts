export default function getNextId<T extends { id: number }>(array: T[]): number {
  if (array.length === 0) {
    return 1; // Retorna 1 si el array está vacío
  }

  return array[array.length - 1].id + 1;
}
