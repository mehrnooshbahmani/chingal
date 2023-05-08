import { Modal } from "components/modal";
import styles from './login.module.scss';
import { Button, Input } from 'antd';
import { useState } from "react";
import { useNavigate } from "react-router";
import { ChingalLogo } from "assets/images";

export const Login = () =>{
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputValue,setInputValue]= useState<{[key:string]:string}>();
  let navigate= useNavigate();
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setInputValue((prev)=>({
        ...prev,
        [e.target.name]: e.target.value,
      }))
  }
  const handleClick= ()=>{
     if (inputValue
     && 'username' in inputValue
     && inputValue['username']==='bahmani'
     && 'password' in inputValue
     && inputValue['password'] === '123456'
     )
     {  
        localStorage.setItem('token','this is a fake token')
     navigate('/dashboard')}
  }

  return (
    <div className={styles['login']}>
        <Modal>
          <div className={styles['login__content']}>
          <img src={ChingalLogo} className={styles['login__content__logo']}/> 
          <div className={styles['login__content__title']}>ورود به پنل چینگال</div>
          <div className={styles['login__content__col']}>
          <label htmlFor='username-id' className={styles['login__content__label']}>نام کاربری</label>
          <Input id="username-id" 
           name="username"
           className={styles['login__content__input']}
           placeholder="نام کاربری خود را وارد کنید"
           onChange={(e)=>handleInput(e)}
           />
           </div>
           <div className={styles['login__content__col']}>
          <label htmlFor="password-id" className={styles['login__content__label']}>رمز عبور</label>
          <Input.Password
           id="password-id"
           name="password"
           placeholder="رمز عبور خود را وارد کنید"
           visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
           className={styles['login__content__input']}
           onChange={(e)=>handleInput(e)}
            />
            </div>
          <Button disabled={!(!!inputValue && !!inputValue['username'] && !!inputValue['password'])}
           className={styles['login__content__button']}
            onClick={()=>handleClick()}>ورود به سپهر</Button>
      </div>
      </Modal>
    </div> );
}

