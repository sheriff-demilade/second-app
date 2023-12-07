import { product } from "../product";

// Destructure the price from product
const { price } = product;

const Price = () => {
  return <p>{price}</p>;
};

export default Price;
