import { API } from 'sevices/config';
import request from '../axios';
import { TUser } from './type';

export const getUsers = async () => {
    const {data}:{data: TUser[]}= await request.get(
      `${API}.mockapi.io/users`,
    );
    return data;
  };

  export const getUser = async (id:number) => {
    const {data}:{data: TUser}= await request.get(
      `${API}.mockapi.io/users/${id}`,
    );
    return data;
  };

  export const addUser = async () => {
    const {data}= await request.post(
      `${API}.mockapi.io/users`,
    );
    return data;
  };

  export const editUser = async (id:number) => {
    const {data}= await request.patch(
      `${API}.mockapi.io/users/${id}`,
    );
    return data;
  };

  export const deleteUser = async (id:number) => {
    const {data}= await request.delete(
      `${API}.mockapi.io/users/${id}`,
    );
    return data;
  };