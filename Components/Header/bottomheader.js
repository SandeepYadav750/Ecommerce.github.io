import {BiSearchAlt} from 'react-icons/bi'
import styles from '../../styles/bottomheader.module.css'
import Link from 'next/link'

const bottomheader = () => {
  return (
    <>
        <div className='bottomheader'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <Link href="/"><a className={`${styles.navbrands} navbar-brand`}>Hekto</a></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={`${styles.botheadul} globbotheadul navbar-nav m-auto `}>
                            <li className="nav-item active dropdown">
                            <Link href="/"><a className='nav-link dropdown-toggle' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Home
                                </a></Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link href="#"><a className="dropdown-item" href="#">Undefined</a></Link>
                                <Link href="#"><a className="dropdown-item" href="#">Undefined</a></Link>
                                <Link href="#"><a className="dropdown-item" href="#">Undefined</a></Link>
                                </div>
                            </li>  
                            <li className="nav-item">
                            <Link href="#"><a className={`${styles.navLink} nav-link`} href="#">Pages</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/Product/Pro_Detail"><a className={`${styles.navLink} nav-link`} >Product</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/blog"><a className={`${styles.navLink} nav-link`} >Blog</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/shopleftsidebar"><a className={`${styles.navLink} nav-link`} >Shop</a></Link>
                            </li>
                            <li className="nav-item">
                            <Link href="/contact"><a className={`${styles.navLink} nav-link`} >Contact</a></Link>
                            </li>
                        </ul>
                        <form className="form-inline d-flex ms-auto">
                            <input className={`${styles.FormControl} form-control`} type="search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><span className={styles.botheadsvg}><BiSearchAlt /></span></button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </>
  )
}

export default bottomheader;
