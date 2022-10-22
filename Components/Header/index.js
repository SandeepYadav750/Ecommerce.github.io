import React from 'react';
import Link from "next/link";
import styles from '../../styles/Header.module.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <>
        <nav className={`${styles['navbarhead']} navbar navbar-expand-lg bg-dark`}>
          <div className='container'>
          <Link href="/">
            <a className={`${styles['navbrands']} navbar-brand`}>E-Commerce</a>
          </Link>          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                  <Link href="/"><a className={`${styles['navlinks']} nav-link`} >Home</a></Link>                
                </li>
                <li className="nav-item active">
                  <Link href="/about"><a className={`${styles['navlinks']} nav-link`}>About</a></Link>                
                </li>              
                <li className="nav-item active">
                  <Link href="/blog"><a className={`${styles['navlinks']} nav-link`}>Blog</a></Link>                
                </li>
                <li className="nav-item active">
                  <Link href="/contact"><a className={`${styles['navlinks']} nav-link`}>Contact</a></Link>                
                </li>                
                <li className="nav-item dropdown">
                  <a className={`${styles['navlinks']} nav-link dropdown-toggle`} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className={`${styles['fa_margin']} fa fa-user`} aria-hidden="true"></i>UserAccount
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link href="#"><a className="dropdown-item">Profile</a></Link>
                    <Link href="#"><a className="dropdown-item">Logout</a></Link>
                  </div>
                </li>    
                <li className="nav-item active">
                <Link href="/cart"><a className={`${styles['navlinks']} nav-link`}><i className="fas fa-shopping-cart" style={{marginRight:'10px'}}></i>cart</a></Link>                
                </li>                      
              </ul>
            </div>
          </div> 
        </nav>
      
      {/* <h1 className={styles.headerd}>hello</h1> */}
    </>
  )
}

export default Header;
