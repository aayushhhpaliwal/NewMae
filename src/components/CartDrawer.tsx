import { useCart } from '../contexts/CartContexts';
// import styles from '../styles/CartDrawer.module.css';

interface CartDrawerProps {
  close: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ close }) => {
  const { cart } = useCart();

  return (
    <div onClick={close}>
      <div onClick={e => e.stopPropagation()}>
        <h2>Your Cart</h2>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <span>{product.title}</span>
              {/* You can add more product details, like price, quantity, etc. */}
            </li>
          ))}
        </ul>
        {cart.length > 0 ? (
          <button onClick={() => {
            // Handle checkout logic here
          }}>
            Checkout
          </button>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
