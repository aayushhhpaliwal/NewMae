// import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app';
import Navbar from '../components/NavBar';
import { CartProvider } from '../contexts/CartContexts';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <Analytics />
      <Component {...pageProps} />
      
    </CartProvider>

  );
}

export default MyApp;