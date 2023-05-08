import {  deleteUser  } from "sevices/users";

export const useRemoveUser = ()=>{
    const removeUserData = async (id:number)=>{
      await deleteUser(id).then(res => {
      return true
      })
  }
  return {removeUserData}
}