import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

export default function Shop() {
 
  return (
    <section id="shop">
      <h2>Unlock Convenience, Rent Your Lifestyle.</h2>
      <h3>Experience lightning-fast delivery with our same-day service!</h3>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
