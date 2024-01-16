export const getFullYearFromString = (date: string): number => {
  const newDate = new Date(date);
  const fullYear = newDate.getFullYear();
  return fullYear;
};
