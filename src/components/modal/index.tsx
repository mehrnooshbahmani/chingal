import styles from './modal.module.scss';

export const Modal=({children}:{children: JSX.Element})=>{
    return(<div className={styles['modal']}>
        {children}
    </div>)
}