import { product } from "../product";

// Destructure the description from product
const { description } = product;

const Description = () => {
  return <p className="card-text">{description}</p>;
};

export default Description;
