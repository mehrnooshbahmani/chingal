import { getUsers } from "sevices/users";
import { useEffect, useState } from "react";
import { TUserInfo } from "../type";

export const useGetUsers=()=>{
    const[data,setData]= useState<TUserInfo[]|[]>([]);

    useEffect(()=>{
      getUsers().then(res => {
      const temp = res.map((item)=>{
          return({
            id: item.id?? '',
            username: item.name?? '',
            age: String(new Date().getFullYear() - new Date(item.dateOfBirth).getFullYear())?? '',
            telephone: item.phoneNumber?? '',
            email: item.email?? '' ,
            address: `${item.country}, ${item.city}, ${item.street}, ${item.zipcode}`,
            country: item.country?? '', 
            city: item.city?? '', 
            street: item.street?? '', 
            zipcode: item.zipcode?? '',
            company: item.company?? '',
            avatar: item.avatar ?? ''
           })
        })
        setData(temp)
      })
    },[])
    
    return{data}
}