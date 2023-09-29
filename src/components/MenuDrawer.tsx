import { useRouter } from 'next/router';
import styles from '../styles/MenuDrawer.module.css';

interface MenuDrawerProps {
  close: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ close }) => {
  const router = useRouter();  // Ensure the router is being used inside the component

  const navigateTo = (path: string) => {
    router.push(path);
    close();
  };

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.drawer} onClick={e => e.stopPropagation()}>
        <ul>
          <li onClick={() => navigateTo('/')}>Home</li>
          <li onClick={() => navigateTo('/brand-mission')}>Brand Mission</li>
          <li onClick={() => navigateTo('/material-innovation')}>Material Innovation</li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default MenuDrawer;
