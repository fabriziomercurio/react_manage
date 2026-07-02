export default function mapErrors(errors: any[]) {
  const mappedErrors: Record<string, string[]> = {};

  for (const err of errors) {
    const field = err.path[0];

    if (!mappedErrors[field]) {
      mappedErrors[field] = [];
    }

    mappedErrors[field].push(err.message);
  }

  return mappedErrors;
}