import { Outlet } from "react-router-dom";
import {Navbar} from "components/navabar";
import {SideBar} from "components/sidebar";
import styles from './dashboardLayout.module.scss'

export const DashboardLayout=()=> {
  return (
    <div>
      <Navbar />
      <div className={styles['layout']}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
