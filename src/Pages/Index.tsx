import { GetStaticProps } from 'next';
import { Product } from '../types';
import { getProducts } from '../utils/shopify';
import styles from '../styles/Home.module.css';

const Home: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map(product => (
        <div key={product.id} className={styles.product}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Add more product details as needed */}
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getProducts();
  return {
    props: {
      products
    }
  };
}

export default Home;
