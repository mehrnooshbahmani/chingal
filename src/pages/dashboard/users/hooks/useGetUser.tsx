import { getUser } from "sevices/users";
import { TUserInfo } from "../type";

export const useGetUser = ()=>{
  let userData: TUserInfo;

    const getUserData = async (id:number)=>{
      await getUser(id).then(res => {
          userData={
            id: res.id?? '',
            username: res.name?? '',
            age: String(new Date().getFullYear() - new Date(res.dateOfBirth).getFullYear())?? '',
            telephone: res.phoneNumber?? '',
            email: res.email?? '' ,
            address: `${res.country}, ${res.city}, ${res.street}, ${res.zipcode}`,
            country: res.country?? '', 
            city: res.city?? '', 
            street: res.street?? '', 
            zipcode: res.zipcode?? '',
            company: res.company?? '',
            avatar: res.avatar?? '',
           }
        })
        return userData
      }
      
    return{getUserData}
}