import { Modal } from "components/modal";
import styles from './edit.module.scss'
import { Input , Form, Row, Col, Button} from "antd";
import {useGetUser} from 'pages/dashboard/users/hooks/useGetUser';
import {useEditUser} from 'pages/dashboard/users/hooks/useEditUser';
import {useRemoveUser} from 'pages/dashboard/users/hooks/useRemoveUser';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {Breadcrumb} from 'antd';

export const EditUser=()=> {
  const [userData,setUsertData]= useState<{[key:string]:string}>();
  const {getUserData}=useGetUser();
  const {editUserData}=useEditUser();
  const {removeUserData}= useRemoveUser();
  const params= useParams();
  const navigate =useNavigate();
   
  useEffect(()=>{
  (async()=>{
       const data = await getUserData(Number(params.id))
       setUsertData(data)
    })()
  },[])

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUsertData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value,
    }))
}
const readImage = (e:React.ChangeEvent<HTMLInputElement>)=> {
  setUsertData((prev)=>({
    ...prev,
    [e.target.name]: URL.createObjectURL(e?.target?.files?.[0] as Blob),
  }))
}
const handleEdit=()=>{
  editUserData(Number(params.id)).then(()=>{
      navigate('/dashboard/users')
  })
}
const handleRemove=()=>{
  removeUserData(Number(params.id)).then(()=>{
      navigate('/dashboard/users')
  })
}
  return (<div className={styles['wrapper']}>
            <Breadcrumb className={styles['breadcrumb']}
    items={[
      {
        title: 'لیست کاربران',
      },
      {
        title: 'ویرایش کاربر',
      },
    ]}
  />
    <div className={styles['edit']}>
    <Modal>
    <Form className={styles['edit__content']}>
    <div className={styles['edit__content__title']}>ویرایش کاربر</div>
    <div className={styles['edit__content__wrapper']}>
    <img src={userData?.avatar} alt="Avatar" className={styles['edit__content__wrapper__img']}/>
    <input type="file"  name='avatar' className={styles['edit__content__wrapper__input']}  onChange={(e)=>readImage(e)}/>
    </div>
    <Row gutter={15} className={styles['edit__content__row']}>
     <Col span={12}><Form.Item label='نام کاربر' className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="username" value={userData?.username}/></Form.Item></Col>
     <Col span={12}><Form.Item label='سن' className={styles['edit__content__item']}><Input/></Form.Item></Col>
     </Row>
     <Row gutter={15} className={styles['edit__content__row']}>
     <Col span={12}><Form.Item label='ایمیل'className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="email" value={userData?.email}/></Form.Item></Col>
     <Col span={12}><Form.Item label='شماره تلفن' className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="telephone" value={userData?.telephone}/></Form.Item></Col>
     </Row>
     <Row gutter={15} className={styles['edit__content__row']}>
     <Col span={6}><Form.Item label='کشور' className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="country" value={userData?.country}/></Form.Item></Col>
     <Col span={6}><Form.Item label='شهر' className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="city" value={userData?.city}/></Form.Item></Col>
     <Col span={6}><Form.Item label='خیابان' className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="street" value={userData?.street}/></Form.Item></Col>
     <Col span={6}><Form.Item label='کد پستی' className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="zipcode" value={userData?.zipcode}/></Form.Item></Col>
     </Row>
     <Form.Item label='شرکت' className={styles['edit__content__item']}><Input onChange={(e)=>handleInput(e)} name="company" value={userData?.company}/></Form.Item>
     <Row justify={"space-between"} className={styles['edit__content__row']} style={{width: '100%'}}>
     <Button className={styles['edit__content__btn']} onClick={()=>handleEdit()}>ویرایش</Button>
     <Button className={`${styles['edit__content__btn']} ${styles['edit__content__btn-remove']}`} onClick={()=>handleRemove()}>حذف</Button>
     </Row>
      </Form>
      </Modal>
    </div>
  </div>)
}
export default EditUser;
