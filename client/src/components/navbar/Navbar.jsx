import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
//import womanImg from '../../assets/woman.jpg'
import krishImg from '../../assets/krish-img-2.jpg'
import { useState } from 'react'
import Footer from '../footer/Footer'
import Contacts from '../../pages/Contacts/contact'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>BlogSite</Link>
        </div>
        <ul className={classes.center}>
          {/* <li className={classes.listItem}>Home</li> */}
          <li className={classes.listItem}>
          <Link style={{textDecoration:'none',color:'white',hover:{
    color: '#dedbdb'
}}} to='/'>Home</Link></li>
            
          
          <li className={classes.listItem}><Link style={{textDecoration:'none',color:'white',hover:{
    color: '#dedbdb'
}}} to='/contacts'>Contacts</Link></li>
          <li className={classes.listItem}>
          <Link style={{textDecoration:'none',color:'white',hover:{
    color: '#dedbdb'
}}} to='/create'>Add Post</Link></li>
            
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={krishImg} className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              <span><Link to='/logout'>Logout</Link></span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar