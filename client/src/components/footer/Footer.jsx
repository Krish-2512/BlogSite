import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the Blog Site</h2>
          <p>
            A site where you can post news and images and get information about past posts shared by others .You can add post in several different categories and can like other posts  as per your wish.
            You can also edit post and can add description.
          </p>
        </div>
        <div className={classes.col}>
        <h2>Contacts</h2>
          <span>Phone:+9199310xxxxx</span>
          <span> LinkedIn:Project</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
   
          <span>Country: India</span>
          <span>Current Location: Guwahati</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer