import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/NavBar';
import { CartProvider } from '../contexts/CartContexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
