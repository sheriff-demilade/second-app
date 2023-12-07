import "./App.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";

function App() {
  return (
    <div>
      {/* Create a card that contains all components created using react-bootstrap in your App.js. */}
      <div className="card mx-auto mt-5" style={{ width: "18rem" }}>
        <Image />
        <div className="card-body">
          <Name />
          <Description />
          <Price />
          <a href="/" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>

      {/*  Display a message below the card that says Hello, then your first name */}
      {/* Display an image if the first name is provided. */}
      <h2 className="pt-5 text-center">
        Hello Sheriff{" "}
        <img
          src="/logo512.png"
          alt="logo"
          style={{ height: "44px", width: "44px" }}
        />
      </h2>
    </div>
  );
}

export default App;
