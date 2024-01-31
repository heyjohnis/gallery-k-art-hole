export const calcDiscount = (originPrice, price) => {
  if (!originPrice) return { discount: 0, discount_rate: 0 };
  const discountPrice = originPrice - price;
  const rate = Math.floor((discountPrice / originPrice) * 100);
  return { discount: discountPrice, discount_rate: rate };
};
