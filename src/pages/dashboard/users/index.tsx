import Table from "antd/lib/table";
import { useUsersTable } from "./hooks/useUsersTable";
import {useGetUsers} from "./hooks/useGetUsers"
import styles from './users.module.scss';
import {Breadcrumb, Button} from 'antd';
import { AddUser } from "./add";
import { useState } from "react";

export const Users=()=> {
  const {columns}= useUsersTable();
  const {data} = useGetUsers();
  const [isOpen,setIsOpen]=useState(false);
  
  return (
    <>
    <div className={styles['table']}>
      <div className={styles['header']}>
        <Breadcrumb className={styles['breadcrumb']}
    items={[
      {
        title: 'لیست کاربران',
      },
    ]}
  />
  <Button className={styles['header__btn']} onClick={()=> setIsOpen(true)}>کاربر جدید</Button>
  </div>
   <Table
     scroll={{x: 1500, y: 550}}
        columns={columns}
        dataSource={[...data]}
        rowKey={record => record?.id || ''}
      />
    </div>
    {isOpen && <AddUser setIsOpen={setIsOpen}/>} 
    </>
  );
}
