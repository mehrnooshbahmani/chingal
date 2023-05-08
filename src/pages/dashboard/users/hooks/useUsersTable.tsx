import type {ColumnsType} from 'antd/lib/table';
import { TUserInfo } from '../type';
import { Link } from "react-router-dom";

export const useUsersTable=()=>{
    const columns: ColumnsType<TUserInfo>=[
        {
            title: 'نام کاربر',
            dataIndex: 'username',
            key: 'username',
            width: 30,
            render: (item: string) => <span>{item}</span>,
          },
          {
            title: 'سن',
            dataIndex: 'age',
            key: 'age',
            width: 20,
            render: (item: string) => <span>{item}</span>,
          },
          {
            title: 'شماره تلفن',
            dataIndex: 'telephone',
            key: 'telephone',
            width:30,
            render: (item: string) => <span>{item}</span>,
          },
          {
            title: 'ایمیل',
            dataIndex: 'email',
            key: 'email',
            width:50,
            render: (item: string) => <span>{item}</span>,
          },
          {
            title: 'آدرس',
            dataIndex: 'address',
            key: 'address',
            width:80,
            render: (item: string) => <span>{item}</span>,
          },
          {
            title: 'شرکت',
            dataIndex: 'company',
            key: 'company',
            width: 30,
            render: (item: string) => <span>{item}</span>,
          },
          {
            title: '',
            dataIndex: 'edit',
            key: 'edit',
            width: 20,
            render: (value, record)  => <Link to={`edit/${record.id}`}>ویرایش</Link>,
          },
    ]

    return {columns};
}