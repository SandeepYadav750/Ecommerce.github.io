import {GoMail} from 'react-icons/go';
import {BsFillTelephoneForwardFill} from 'react-icons/bs';
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import styles from '../../styles/Topheader.module.css'


const topheader = () => {
  return (
    <>
      <div className={`${styles.topheaders} topheader`}>
        <div className='container'>
            <nav className="navbar navbar-expand-lg" style={{padding:'0'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={`${styles.navitemlist} nav-item active`}>
                                <a className="nav-link" href="mailto:san339@gmail.com"><GoMail />san339@gmail.com</a>
                            </li>
                            <li className={`${styles.navitemlist} nav-item`}>
                                <a className="nav-link" href="tel:+91 987643210"><BsFillTelephoneForwardFill />+91 987643210</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className={`${styles.sandropdown} nav-link dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    English
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Engish</a>
                                    <a className="dropdown-item" href="#">Hindi</a>
                                    <a className="dropdown-item" href="#">Tamil</a>
                                </div>
                            </li>   
                            <li className="nav-item dropdown">
                                <a className={`${styles.sandropdown} nav-link dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    USD
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Default</a>
                                    <a className="dropdown-item" href="#">Default</a>
                                    <a className="dropdown-item" href="#">Default</a>
                                </div>
                            </li>    
                            <li className={`${styles.sandropdown} nav-item`}>
                                <a className="nav-link" href="#">Login<AiOutlineUser /></a>
                            </li>
                            <li className={`${styles.sandropdown} nav-item`}>
                                <a className="nav-link" href="#">Whislist<AiOutlineHeart /></a>
                            </li>
                            <li className={`${styles.sandropdown} nav-item`}>
                                <a className="nav-link" href="#"><AiOutlineShoppingCart /></a>
                            </li>  
                        </ul>
                </div>
            </nav>
        </div>
      </div>
    </>
  )
}

export default topheader;
