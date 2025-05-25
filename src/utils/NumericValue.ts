export const numericValue = (value: string) => {
  if (!/^\d+$/.test(value)) {
    return 0;
  }
  return Number(value);
};
