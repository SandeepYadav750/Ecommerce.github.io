import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from "../Components/Footer";
import styles from "../styles/404.module.css"
import Image from 'next/image';
import Link from "next/link"
import router from 'next/router'
import { useEffect } from 'react';
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';

const errorpage = () => {

const handlebackbtn = () =>{
    router.push('/');
};

// useEffect(() => {
//     setTimeout(() => {
//         router.push('/');
//     }, 3000)
// }, []);

  return (
    <>
      <Topheader />
      <Bottomheader />
    <Breadcrum
      HeadingName= '404 Not Found'
      firstpage= 'Home'
      secondpage = 'pages'
      activepage = '404 Not Found'
    />
      <div className={styles.errorpage}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-10 m-auto text-center my-5'>
                    <div className={styles.errordes}>
                        <div className={styles.errorimg}>
                          <Image
                            src="/images/404web.png"
                            width="800px"
                            height="400px"
                            alt="404 Error Page"
                          ></Image>
                        </div>
                        <p>Oops! The page you requested was not found!</p>
                        {/* <Link href="/"><a><button className="checkoutbtn" onClick={handlebackbtn}>Back To Home Button</button></a></Link> */}
                        {/* <button className="checkoutbtn" onClick={handlebackbtn}>Back To Home Button</button> */}
                        <button className="ecommercebtn" onClick={handlebackbtn}>Back To Home</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default errorpage
