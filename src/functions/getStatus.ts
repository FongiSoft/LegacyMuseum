export function getStatus(status?: string): Array<string> {
  const statuses = [
    "cancelada",
    "en tramite",
    "vigente"
  ];

  if (!status) return statuses
  return statuses.filter((s) => s !== status);
}