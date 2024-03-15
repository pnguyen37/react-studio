// TODO: create a component that displays a single bakery item

export default function BakeryItem(props) {
  return (
    <div className="BakeryItem">
      <img src={props.image} alt={props.name} />
      <div className="cardText">
        <p className="foodTitle">{props.name}</p>
        <p>{props.description}</p>
        <p>${props.price}</p>
        <button onClick={() => props.updateCart()}>Add to Cart</button>
      </div>
    </div>
  );
}
