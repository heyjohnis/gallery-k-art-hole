export const calcSumCartPoint = ({ items, setForm }) => {
  const originPrice = items?.reduce(
    (acc, cur) => acc + cur.origin_price * (cur.quantity || 1),
    0
  );
  const price = items?.reduce(
    (acc, cur) => acc + cur.price * (cur.quantity || 1),
    0
  );
  const deliveryFee = items?.reduce(
    (acc, cur) => acc + cur.delivery_fee || 0,
    0
  );
  const optionsPrice = items?.reduce(
    (acc, cur) => acc + cur.option_price || 0,
    0
  );

  const totalPrice = price + deliveryFee + optionsPrice;
  const salePoint = originPrice - price;
  const saleRate = Math.round((salePoint / originPrice) * 100);
  console.log(
    "calcSumCartPoint: ",
    { originPrice },
    { price },
    { deliveryFee },
    { optionsPrice },
    { totalPrice },
    { salePoint },
    { saleRate }
  );
  setForm((prev) => ({
    ...prev,
    price: price,
    origin_price: originPrice,
    delivery_fee: deliveryFee,
    option_price: optionsPrice,
    total_price: totalPrice,
    pay_amount: totalPrice,
    sale_price: salePoint,
    sale_rate: saleRate,
  }));
};
