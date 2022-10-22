import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from "../Components/Footer"
import styles from '../styles/Checkout.module.css'
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link"
import Image from 'next/image'

const checkout = () => {
  return (
    <>
      <Topheader />
      <Bottomheader />
     <div className={styles.checkoutpage}>
        <div className='container'>
          <div className={`${styles.checkout_wrap} my-5`}>
            <div className="row">
              <div className='col-md-8 '>
                <div className={styles.bookinfo}>
                  <div className={`${styles.logohead} mb-4`}>
                    <Link href="/">
                        <a className={`${styles.navbrands} navbar-brand`}>Hekto Demo</a>
                    </Link>
                    <div className={`${styles.breadcrumb} mt-2`}>
                      <Breadcrum
                        HeadingName= 'Hekto Demo'
                        firstpage= 'Information'
                        secondpage = 'Shipping'
                        activepage = 'Payment'
                      />
                    </div>
                  </div>                      
                  <div className='row'>
                    <div className={styles.cont_info}>
                      <h4>Contact information</h4>
                      <p>Already have an account?<Link href="/account/login"><a className={styles.cont_login}>Log In</a></Link></p>
                    </div>  
                    <div className='col-md-12 g-3 form-group'>
                      <input type='number' className='form-control' placeholder='Email or Phone Number' />
                    </div>
                    <div className='col-md-12 g-3 form-group'>
                      <input type='checkbox' style={{marginRight:"10px"}}/><span style={{color:'#d1d1d1'}}>Keep me up to date on newa and exclusive offer.</span>
                    </div>
                  </div>
                  <div className={`${styles.shipping_add} my-4`}>
                    <h4>Shipping Address</h4>
                    <div className={`${styles['ques_form']}`}>
                          <form>
                            <div className='row'>
                              <div className='col-md-6 g-3 form-group'>
                                <input type='text' className='form-control' placeholder='First Name' />
                              </div>
                              <div className='col-md-6 g-3 form-group'>
                                <input type='text' className='form-control' placeholder='Last Name' />
                              </div>
                              <div className='col-md-12 g-3 form-group'>
                                <input type='text' className='form-control' placeholder='Address' />
                              </div>
                              <div className='col-md-12 g-3 form-group'>
                                <input type='text' className='form-control' placeholder='Appartment(optional)' />
                              </div>
                              {/* <div className='col-md-12 g-3 form-group'>
                                <input type='text' className='form-control' placeholder='City' />
                              </div> */}
                              <div className="col-md-12 g-3 form-group">
                                <select className={`${styles.selectcss} form-control`}>
                                <option>County/Region</option>
                                  <option>Delhi</option>
                                  <option>Uttar Pradesh</option>
                                  <option>Bihar</option>
                                  <option>Mumbai</option>
                                </select>
                              </div>
                              <div className="col-md-6 g-3 form-group">
                                <select className={`${styles.selectcss} form-control`}>
                                  <option>State</option>
                                  <option>Delhi</option>
                                  <option>Uttar Pradesh</option>
                                  <option>Bihar</option>
                                  <option>Mumbai</option>
                                </select>
                              </div>
                              <div className='col-md-6 g-3 form-group'>
                                <input type='number' className='form-control' placeholder='Pincode' />
                              </div>
                              <div className='col-md-12 g-3 form-group'>
                               <Link href="/"><a><button className="ecommercebtn">Continue to Shipping</button></a></Link>
                              </div>
                            </div>
                          </form>
                      </div>
                  </div>         
                </div>
              </div>
              <div className='col-md-4'>
                <div className={styles.totalpricebox}>
                <div className='row'>
                  <div className='col-12'>
                    <div className={`${styles.pricepay} mb-3`}>
                      <div className={styles.cartimg_title}>
                          <Image
                              src="/images/watch.webp"
                              width="100px"
                              height="100px"
                              className={`${styles['itemsingleimage']} img-fluid`}
                              alt="itemsimage"
                          >
                          </Image>
                          <div className={styles.aboutpro}>
                              <span className={styles.carttablename}>Iphone Watch 360s</span>
                              <span className={styles.carttablesubname}>ColorDiamond</span>
                              <span className={styles.carttablesubname}>Size25</span>
                          </div>
                      </div>       
                      <p className={styles.pricestyle}>$199.00</p>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={`${styles.pricepay} mb-3`}>
                      <div className={styles.cartimg_title}>
                          <Image
                              src="/images/sofa.jpg"
                              width="100px"
                              height="100px"
                              className={`${styles['itemsingleimage']} img-fluid`}
                              alt="itemsimage"
                          >
                          </Image>
                          <div className={styles.aboutpro}>
                              <span className={styles.carttablename}>Sofa</span>
                              <span className={styles.carttablesubname}>Color White</span>
                              <span className={styles.carttablesubname}>Size125</span>
                          </div>
                      </div>       
                      <p className={styles.pricestyle}>$599.00</p>
                    </div>
                  </div>
                </div>
                  
                </div>
                <div className={`${styles.carttotalprice} my-4`}>
                    <span className={styles.sbtotalprice}><span className={styles.sbtotaltext}>Subtotals:</span> $798.00</span>
                    <span className={styles.sbtotalprice}><span className={styles.sbtotaltext}>Totals:</span> $1098.00</span>
                    <span style={{display: 'flex',alignItems: 'center'}}><span className={styles.Greencolor}></span><span className={styles.sbtotalpara}>Shipping & taxes calculated at checkout</span></span><br />
                    <Link href='#'><a><button className="ecommercebtn w-100 my-3" style={{background:'#16d26d',border:'1px solid #16d26d'}}>Proceed To Checkout</button></a></Link>
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

export default checkout
