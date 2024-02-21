import { useContext } from "react";
import {CartContext} from "../store/shopping-cart-context";

export default function Cart() {
  const {items, updateCart} = useContext(CartContext);
 
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = parseFloat(totalPrice.toFixed(2));
  const newPrice = items.reduce((acc,item) => acc + (item.quantity >= 4 ? item.dp : item.price) * item.quantity, 0);
  const formattedNewPrice = parseFloat(newPrice.toFixed(2));
   //console.log(items);
    
  const dis = items.map((item) => {return item.quantity >= 4})
  //console.log(dis);

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = parseFloat(item.price.toFixed(2));
            const newPrice = formattedPrice - (formattedPrice * 0.1);
            //console.log(item);
          
            return (
              <li key={item.id}>
                <div>
                  <span>{item.name} </span>
                  <span>{item.quantity >= 4 ? `: ₹${newPrice} per week rent` : `: ₹${formattedPrice} per week rent`}</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateCart(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCart(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>₹{formattedTotalPrice}</strong>
      </p>
      {(dis.includes(true)) && <p id="cart-total-price">
        You pay after discount!: <strong>₹{formattedNewPrice}</strong>
      </p>}
    </div>
  );
}
