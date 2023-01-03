export const randomNumber = (
  min: number = 0,
  max: number = 0.4,
  decimalPoint: number = 3,
) => +(Math.random() * (max - min) + min).toFixed(decimalPoint);
