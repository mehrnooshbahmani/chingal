import { editUser } from "sevices/users";

export const useEditUser = ()=>{

    const editUserData = async (id:number)=>{
      await editUser(id).then(res => {
        return true
      })
  }
  return {editUserData}
}