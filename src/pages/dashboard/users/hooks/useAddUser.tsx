import { addUser } from "sevices/users";

export const useAddUser = ()=>{

    const addUserData = async ()=>{
      await addUser().then(res => {
        return true
      })
  }
  return {addUserData}
}