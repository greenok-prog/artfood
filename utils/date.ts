export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
};
