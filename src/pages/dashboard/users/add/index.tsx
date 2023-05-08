import { Modal } from "components/modal";
import styles from './add.module.scss'
import { Input , Form, Row, Col, Button} from "antd";
import { useState} from "react";
import { TAddProps } from "./type";
import {Avatar} from "assets/images";
import {useAddUser} from 'pages/dashboard/users/hooks/useAddUser';

export const AddUser=({setIsOpen}:TAddProps)=> {
    const [userData,setUsertData]= useState<{[key:string]:string}>();
    const {addUserData}= useAddUser();
  

    const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUsertData((prev)=>({
          ...prev,
          [e.target.name]: e.target.value,
        }))
    }

    const handleAdd=()=>{
      addUserData().then(()=>{
          setIsOpen(false)
      })
    }

    const readImage = (e:React.ChangeEvent<HTMLInputElement>)=> {
      setUsertData((prev)=>({
        ...prev,
        [e.target.name]: URL.createObjectURL(e?.target?.files?.[0] as Blob),
      }))
    }

  return (<div className={styles['wrapper']}>
    <div className={styles['add']}>
    <Modal>
    <Form className={styles['add__content']}>
    <div className={styles['add__content__title']}> کاربر جدید</div>
    <div className={styles['add__content__wrapper']}>
    <img src={userData?.avatar ? userData?.avatar:  Avatar} alt="Avatar" className={styles['add__content__wrapper__img']}/>
    <input type="file"  name='avatar' className={styles['add__content__wrapper__input']}  onChange={(e)=>readImage(e)}/>
    </div>
    <Row gutter={15} className={styles['add__content__row']}>
     <Col span={12}><Form.Item label='نام کاربر' className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="username" /></Form.Item></Col>
     <Col span={12}><Form.Item label='سن' className={styles['add__content__item']}><Input/></Form.Item></Col>
     </Row>
     <Row gutter={15} className={styles['add__content__row']}>
     <Col span={12}><Form.Item label='ایمیل'className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="email" /></Form.Item></Col>
     <Col span={12}><Form.Item label='شماره تلفن' className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="telephone"/></Form.Item></Col>
     </Row>
     <Row gutter={15} className={styles['add__content__row']}>
     <Col span={6}><Form.Item label='کشور' className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="country"/></Form.Item></Col>
     <Col span={6}><Form.Item label='شهر' className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="city"/></Form.Item></Col>
     <Col span={6}><Form.Item label='خیابان' className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="street" /></Form.Item></Col>
     <Col span={6}><Form.Item label='کد پستی' className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="zipcode" /></Form.Item></Col>
     </Row>
     <Form.Item label='شرکت' className={styles['add__content__item']}><Input onChange={(e)=>handleInput(e)} name="company" value={userData?.company}/></Form.Item>
     <Row justify={"space-between"} className={styles['add__content__row']} style={{width: '100%'}}>
     <Button className={`${styles['add__content__btn']} ${styles['add__content__btn--cancel']}`} onClick={()=>setIsOpen(false)}>لغو</Button>
     <Button className={`${styles['add__content__btn']} ${styles['add__content__btn--confirm']}`} onClick={()=>handleAdd()}>تایید</Button>
     </Row>
      </Form>
      </Modal>
    </div>
  </div>)
}
