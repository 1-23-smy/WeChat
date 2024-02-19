import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../http'
import styles from './Navigation.module.css'
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Navigation = () => {
  const dispatch=useDispatch()
  const{isAuth}=useSelector((state)=>state.auth)
  async function logoutUser() {
    try {
    const {data}=  await logout();
      dispatch(setAuth(data))
    } catch (error) {
      console.log(error);
    }
  }
  const brandStyle={
    color:"#ffff",
    textDecoration:"none",
    fontWeight:"bold",
    fontSize:"23px",
    display:"flex",
    alignItems:"center"
  
  }
  const logoText={
    marginLeft:"10px"
  }
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to={'/'}>
        <img src='/images/logo.png' alt='logo'/>
        <span style={logoText}>WeChat</span>
      </Link>
      {isAuth && <button
        className={styles.logoutButton}
        onClick={logoutUser}
      >
        <img src="/images/logout.png" alt="logout" />
      </button>}
    </nav>
  )
}

export default Navigation