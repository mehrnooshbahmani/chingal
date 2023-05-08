import { Divider, Menu} from "antd";
import { useState } from "react";
import styles from "./sidebar.module.scss"
import type { MenuProps} from 'antd';
import { Link } from "react-router-dom";
import {Home} from "assets/images";
import {Statistics} from "assets/images";
import {Headset} from "assets/images";
import {Robot} from "assets/images";
import {Car} from "assets/images";
import {Refresh} from "assets/images";
import {Setting} from "assets/images";
import {Logout} from "assets/images";

export const SideBar=() =>{
  const [current, setCurrent] = useState('home');

  const handleLogout=()=>{
    localStorage.removeItem('token')
  }
  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e.key)
    setCurrent(e.key);
    if (e.key==='logout')
    handleLogout()
  };

  return (
    <div className={styles['wrapper']}>
      <Menu
        onClick={onClick}
        defaultOpenKeys={['home']}
        selectedKeys={[current]}
        className={styles['sidebar']}
      >
        <Menu.Item key='home'>
        <Link to="/dashboard">
          <div className={styles['sidebar__row']}>   
            <img src={Home}/>
           <div>خانه</div>
            </div>
            </Link>
        </Menu.Item>
        <Menu.Item key='users'>
        <Link to="/dashboard/users">
        <div className={styles['sidebar__row']}>   
            <img src={Statistics}/>
           <div>کاربران</div>
            </div>
              </Link>
        </Menu.Item>
      <Divider className={styles['sidebar__divider']}/>
        <Menu.Item key='fakeKey1'>
        <div className={styles['sidebar__row']}>   
            <img src={Headset}/>
           <div>لورم ایپسوم</div>
            </div>
        </Menu.Item>
        <Menu.Item key='fakeKey2'>
        <div className={styles['sidebar__row']}>   
            <img src={Robot}/>
           <div>لورم ایپسوم</div>
            </div>
        </Menu.Item>
        <Menu.Item key='fakeKey3'>
        <div className={styles['sidebar__row']}>   
            <img src={Car}/>
           <div>لورم ایپسوم</div>
            </div>
        </Menu.Item>
        <Menu.Item key='fakeKey4'>
        <div className={styles['sidebar__row']}>   
            <img src={Refresh}/>
           <div>لورم ایپسوم</div>
            </div>
        </Menu.Item>
        <Menu.Item key='fakeKey5'>
        <div className={styles['sidebar__row']}>   
            <img src={Setting}/>
           <div>لورم ایپسوم</div>
            </div>
        </Menu.Item>
        <Divider  className={styles['sidebar__divider']}/>
        <Menu.Item key='logout'>
        <div className={styles['sidebar__row']}>   
            <img src={Logout}/>
           <div className={styles['sidebar__logout']}>خروج</div>
            </div>
            خروج
        </Menu.Item>
      </Menu>
      </div>
  );
}
