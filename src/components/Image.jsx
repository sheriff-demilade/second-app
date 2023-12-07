import { product } from "../product";

// Destructure the name and path from product.
const { name, path } = product;

const Image = () => {
  return <img src={path} alt={name} className="card-img-top" />;
};

export default Image;
