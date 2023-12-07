import { product } from "../product";

// Destructure the description from product
const { name } = product;
const Name = () => {
  return <h5 className="card-title">{name}</h5>;
};

export default Name;
