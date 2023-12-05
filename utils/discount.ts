export const getDiscountPercent = (
  price: number,
  discountPrice: number
): string => {
  return (((price - discountPrice) / price) * 100).toFixed(0);
};
