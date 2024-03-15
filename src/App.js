import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [countMap, setCountMap] = useState(new Map());

  const [price, setPrice] = useState(0.0);

  const update = (name, item_price) => {
    const updatedMap = new Map(countMap);
    updatedMap.has(name)
      ? updatedMap.set(name, updatedMap.get(name) + 1)
      : updatedMap.set(name, 1);

    setCountMap(updatedMap);
    console.log(item_price);
    setPrice(parseFloat((price + item_price).toFixed(2)));
  };

  return (
    <div className="App">
      <div className="MenuContainer">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="Menu">
          {bakeryData.map(
            (
              item,
              index // TODO: map bakeryData to BakeryItem components
            ) => (
              <BakeryItem
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                updateCart={() => update(item.name, item.price)}
              /> // replace with BakeryItem component
            )
          )}
        </div>
      </div>
      <div className="Cart">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {Array.from(countMap).map(([key, value]) => (
          <div>
            <p>
              {value}x {key}
            </p>
          </div>
        ))}
        <p>Total: ${price}</p>
      </div>
    </div>
  );
}

export default App;
