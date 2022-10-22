import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from "../Components/Footer";
import Image from 'next/image';
import styles from "../styles/Cart.module.css";
import Links from "next/link"
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';

const cart = () => {
  return (
    <>
      <Topheader />
      <Bottomheader />
        <Breadcrum
            HeadingName= 'Shopping Cart'
            firstpage= 'Home'
            secondpage = 'pages'
            activepage = 'Shopping Cart'
        />
      <div className={`${styles.cartpage} my-5`}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-9 col-md-12'>
                    <div className={`${styles.carttable} table-responsive`}>
                        <table className="table" style={{borderCollapse: 'collapse'}}>
                        <thead>
                            <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <div className={styles.cartimg_title}>
                                    <Image
                                        src="/images/watch.webp"
                                        width="100px"
                                        height="100px"
                                        className={`${styles['itemsingleimage']} img-fluid`}
                                        alt="itemsimage"
                                    >
                                    </Image>
                                    <div className={styles.xcross}>x</div>
                                    <div className={styles.aboutpro}>
                                        <span className={styles.carttablename}>Iphone Watch 360s</span>
                                        <span className={styles.carttablesubname}>ColorDiamond</span>
                                        <span className={styles.carttablesubname}>Size25</span>
                                    </div>
                                </div>
                            </td>                            
                            <td className={styles.carttableprice}>$209.00</td>
                            <td>
                                <div className={styles.carttablequantity}>
                                    <input type="number" className='form-control' style={{width:'50%', borderRadius: '0',textAlign: 'center'}}/>
                                </div>
                            </td>
                            <td className={styles.carttableprice}>$599.00</td>
                            </tr>
                            <tr>
                            <td>
                                <div className={styles.cartimg_title}>
                                    <Image
                                        src="/images/sofa.jpg"
                                        width="100px"
                                        height="100px"
                                        className={`${styles['itemsingleimage']} img-fluid`}
                                        alt="itemsimage"
                                    >
                                    </Image>
                                    <div className={styles.xcross}>x</div>
                                    <div className={styles.aboutpro}>
                                        <span className={styles.carttablename}>sofa</span>
                                        <span className={styles.carttablesubname}>ColorWhite</span>
                                        <span className={styles.carttablesubname}>Size125</span>
                                    </div>
                                </div>
                            </td>                            
                            <td className={styles.carttableprice}>$499.00</td>
                            <td>
                                <div className={styles.carttablequantity}>
                                    <input type="number" className='form-control' style={{width:'50%', borderRadius: '0',textAlign: 'center'}}/>
                                </div>
                            </td>
                            <td className={styles.carttableprice}>$998.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`${styles.carttwobtn} mt-3 mb-5`}>
                    <button className="ecommercebtn">Update Cart</button>
                    <button className="ecommercebtn">Clear Cart</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12'>
                    <div className='cardsidebox mb-4'>
                        <div className={`${styles.carttotalhead} text-center`}>
                            <h6>Cart Totals</h6>
                        </div>
                        <div className={`${styles.carttotalprice}`}>
                            <span className={styles.sbtotalprice}><span className={styles.sbtotaltext}>Subtotals:</span> $798.00</span>
                            <span className={styles.sbtotalprice}><span className={styles.sbtotaltext}>Totals:</span> $1098.00</span>
                            <span style={{display: 'flex',alignItems: 'center'}}><span className={styles.Greencolor}></span><span className={styles.sbtotalpara}>Shipping & taxes calculated at checkout</span></span><br />
                            <Links href='/checkout'><a><button className="ecommercebtn w-100 my-3" style={{background:'#16d26d',border:'1px solid #16d26d'}}>Proceed To Checkout</button></a></Links>
                        </div>
                    </div>
                    <div className='cardsidebox mb-4'>
                        <div className={`${styles.carttotalhead} text-center`}>
                            <h6>Calculate Shopping</h6>
                        </div>
                        <div className={`${styles.carttotalprice}`}>
                            <input types="text" className='form-control mb-3' placeholder='Country'></input>
                            <input types="text" className='form-control mb-3' placeholder='Address'></input>
                            <input types="text" className='form-control mb-3' placeholder='Pincode'></input>
                            <Links href='/checkout'><a><button className="ecommercebtn my-3">Calculate Shiping</button></a></Links>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default cart;
