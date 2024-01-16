export const calcDiscount = (originPrice, price) => {
  const discountPrice = originPrice - price;
  const rate = Math.floor((discountPrice / originPrice) * 100);
  return { discount: discountPrice, discount_rate: rate };
};
