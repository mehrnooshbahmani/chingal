import styles from './navbar.module.scss'
import { ChingalLogo } from "assets/images";
import { Theme } from "assets/images";
import { Input} from 'antd';
import { useLocation } from 'react-router-dom';

export const Navbar=()=> {
  const { Search } = Input;

  const location = useLocation();

  return (
    <nav className={styles['navbar']}>
     <img src={ChingalLogo} className={styles['navbar__logo']}/>
     <div className={styles['navbar__search']}>
     {location.pathname ==='/dashboard/users'  && <Search placeholder="جستجو" onSearch={()=>console.log('hii')} style={{ width: 400 }} />}
     <img src={Theme} className={styles['navbar__theme-logo']}/>
     </div>
     
    </nav>
  );
}
