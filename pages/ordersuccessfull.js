import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from "../Components/Footer"
import styles from "../styles/ordersuccessfull.module.css";
import {GiCheckMark} from "react-icons/gi"
import Links from "next/link"
import Image from 'next/image';
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';

const ordersuccessfull = () => {
  return (
    <>
      <Topheader />
      <Bottomheader />
      <Breadcrum
        HeadingName= 'Order Completed'
        firstpage= 'Home'
        secondpage = 'pages'
        activepage = 'Order Completed'
      />
        <div className={`${styles.ordersuccessfull} py-5`}>
            <div className='container'>
            <div className={`${styles.paymentbox}`}>
              <div className={styles.wallwatch}>
                <Image
                   src="/images/wallwatch.png"
                    width="100px"
                    height="100px"
                    alt="Order Completion Watch Icon"
                ></Image>
              </div>
                <div className={styles.checkedicon}>
                    <span><GiCheckMark /></span>
                </div>
                <div className={styles.successheading}>
                    <h2>Your Order Is Completed</h2>
                </div>
                <div className={styles.successpara}>
                    <p>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an confirmation through message soon.</p>
                </div>
                <div className={styles.successbtn}>
                   <Links href="/"><a><button className="ecommercebtn">Continue Shopping</button></a></Links>
                </div>
                <div className={styles.notepade}>
                <Image
                   src="/images/notepad.png"
                    width="100px"
                    height="100px"
                    alt="Order Completion notepade Icon"
                ></Image>
                </div>
            </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default ordersuccessfull;
