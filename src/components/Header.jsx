import { useRef } from 'react';
import { useContext } from 'react';
import {CartContext} from '../store/shopping-cart-context.jsx';

import CartModal from './CartModal.jsx';
import Modal from './Modal.jsx';

export default function Header() {
  const modal = useRef();
  const modal1 = useRef();


  const {items,updateCart,removeCart} = useContext(CartContext);

  const cartQuantity = items.length;
  console.log(cartQuantity);

  function handleOpenCartClick() {
    modal.current.open();
  }

  function clickHandler(){
    modal.current.close();
    modal1.current.open();
    removeCart();
  }


  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button onClick={clickHandler}>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={items}
        onUpdateCartItem={updateCart}
        title="Your Cart"
        actions={modalActions}
      />
      <Modal
        ref={modal1}
        title="Your order has been placed"
        time="Items will be delivered at the end of the day"
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo2.png" alt="Rental Application" />
          <h1>RentEase Exchange</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
