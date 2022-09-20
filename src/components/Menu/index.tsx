import { ReactComponent as Logo } from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

export default function Menu() {

  const routes = [
    {
      label: 'Inicio',
      to: '/'
    },
    {
      label: 'Cardápio',
      to: '/cardapio'
    },
    {
      label: 'Sobre',
      to: '/sobre'
    }];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.to} className={styles.menu__link}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}