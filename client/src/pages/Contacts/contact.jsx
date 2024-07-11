import React from 'react'
import Categories from '../../components/categories/Categories'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import classes from './contacts.module.css'
// import classes from '../../components/newsletter/newsletter.module.css'
import {FiSend} from 'react-icons/fi'

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.titles}>
          <h5>Want to get the latest updates?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className={classes.inputContainer}>
          <input type="email" placeholder='Type email...'/>
          <FiSend className={classes.sendIcon}/>
        </div>
      </div>
    </div>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the Blog Site</h2>
          <p>A site where you can post news and images and get information about past posts shared by others .You can add post in several different categories and can like other posts  as per your wish.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone:+9199310xxxxx</span>
          <span> LinkedIn:Project</span>
          <span> Email:abc@gmail.com</span>
          
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
        
          <span>Country: India</span>
          <span>Current Location: Guwahati</span>
        </div>
      </div>
      
    </>

  )

}

export default Contacts