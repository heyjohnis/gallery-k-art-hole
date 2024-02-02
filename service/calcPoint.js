export const calcTotalOrderPoint = ({ user, form, setForm }) => {
  const price = form?.price || 0;
  const optionPrice = form?.option_price || 0;
  const originPrice = form?.origin_price || 0;
  const delivery_fee = form?.delivery_fee || 0;

  const totalPoint = price + delivery_fee + optionPrice;
  const salePoint = originPrice - price;
  const saleRate = Math.round((salePoint / originPrice) * 100);

  const hasPoint =
    user?.yearly_point - user?.use_point > 0
      ? user?.yearly_point - user?.use_point
      : 0;

  const usePoint = totalPoint > hasPoint ? hasPoint : totalPoint;
  setForm((prev) => ({
    ...prev,
    total_point: totalPoint,
    has_point: hasPoint,
    use_point: usePoint,
    sale_point: salePoint,
    sale_rate: saleRate,
  }));
};

export const calcSumCartPoint = (items, setForm) => {
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
  setForm((prev) => ({
    ...prev,
    origin_price: originPrice,
    delivery_fee: deliveryFee,
    option_price: optionsPrice,
    total_price: totalPrice,
  }));
};
