import Topheader from '../../Components/Header/topheader'
import Bottomheader from '../../Components/header/bottomheader'
import Footer from "../../Components/Footer"
import styles from '../../styles/productdetail.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineStar,AiFillStar,AiFillHeart } from "react-icons/ai";
import {HiOutlineArrowRight} from "react-icons/hi";
import {Component} from 'react'
import Breadcrum from '../../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';


const src = '/images/watch.webp'


class productname extends Component {
    state = {
      backgroundImage: `url(${src})`,
      backgroundPosition: '0% 0%',
    }
  
    handleMouseMove = e => {
      const { left, top, width, height } = e.target.getBoundingClientRect()
      const x = (e.pageX - left) / width * 100
      const y = (e.pageY - top) / height * 100
      this.setState({ backgroundPosition: `${x}% ${y}%` })
    }
    
    // const demoTrigger = document.querySelector('.demo-trigger');
// const paneContainer = document.querySelector('.detail');

// new Drift(demoTrigger, {
//   paneContainer: paneContainer,
//   inlinePane: false,
// });

render = () =>
    <>
      <Topheader />
      <Bottomheader />
    <Breadcrum
      HeadingName= 'Product Detail'
      firstpage= 'Home'
      secondpage = 'pages'
      activepage = 'Product Detail'
    />
      <div className={`${styles.productdetail} my-5`}>
        <div className="container">
            <div className='col-md-12'>
              <div className={styles.productbox}>
                <div className='row'>
                  <div className='col-md-2'>   
                    <div className={styles.subimages}>
                      <div className='row'>
                        <div className='col-md-12 col-sm-4 col-4'>
                          <div className={`${styles.subimage} m-2`}>
                            <Image
                              src="/images/watch.webp"
                              width="100%"
                              height="110px"
                              alt="product image"
                            >
                            </Image>
                          </div>
                        </div>
                        <div className='col-md-12 col-sm-4 col-4'>
                          <div className={`${styles.subimage} m-2`}>
                            <Image
                              src="/images/headphone.png"
                              width="100%"
                              height="110px"
                              alt="product image"
                            >
                            </Image>
                          </div>
                        </div>                     
                        <div className='col-md-12 col-sm-4 col-4'>
                          <div className={`${styles.subimage} m-2`}>
                            <Image
                              src="/images/recorder.webp"
                              width="100%"
                              height="110px"
                              alt="product image"
                            >
                            </Image>
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div className='col-md-4'>
                    <div className={styles.productimages}>
                      <figure onMouseMove={this.handleMouseMove} style={this.state}>
                      
                        <Image
                            src={src}
                            width="350px"
                            height="400px"
                            className={styles.demotrigger}
                            alt="product image"
                          >
                          </Image>
                      </figure>                    
                    </div>              
                  </div>
                  <div className='col-md-6'>
                    <div className={styles.aboutProduct}>
                      <div className={styles.pro_heading}>
                        <h2>Apple Watch 360s</h2>
                      </div>
                      <div className={styles.reviews}>
                        <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />(22)</span>
                      </div>
                      <div className={`${styles['item_price']} my-2`}>
                        <div className={styles.price}>
                          <span>$120.00</span>
                        </div>
                        <div className={styles.discountprice}>
                          <span><del>$150.00</del></span>
                        </div>
                      </div>
                      <div className={`${styles.colortype} mt-3 mb-2`}>
                        <label>Color</label>
                      </div>
                      <div className={styles.prodetailpara}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s.</p>
                      </div>  
                      <div className={`${styles.buycart} my-2`}>
                      <Link href='/cart'><a> <button className={styles.buycartbtn}>Add To Cart</button> </a></Link>
                          <Link href='/account/login'><a> <button className={`${styles.loginlink} mx-2`} title="Whislist"><AiFillHeart /></button> </a></Link>
                      </div>
                      <div className={`${styles.brand_media} my-2`}>
                        <div className={`${styles['category']} `}>
                              <label className={styles.sharelabel}>Categories:</label>
                              <ul style={{listStyle:"none",padding:"0",margin:"0"}}>
                                <li></li>
                              </ul>
                          </div>
                          <div className={`${styles['tags']} `}>
                              <label className={styles.sharelabel}>Tags:</label>
                              <ul style={{listStyle:"none",padding:"0",margin:"0"}}>
                                  <li></li>
                              </ul>
                          </div>
                          <div className={`${styles['social_media']} `}>
                              <label className={styles.sharelabel}>Share:</label>
                              <ul style={{listStyle:"none",padding:"0",margin:"0"}}>
                                  <li>
                                      <Link  href="https://www.facebook.com/">
                                      <a target="_blank">
                                          <Image
                                              src="/images/facebook48.png" 
                                              width="20px"
                                                  height="20px" 
                                                  alt="socialmediaicon"
                                          >
                                          </Image>
                                      </a>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link  href="https://twitter.com/">
                                      <a target="_blank">
                                          <Image
                                              src="/images/twitter48.png" 
                                              width="20px"
                                                  height="20px" 
                                                  alt="socialmediaicon"
                                          >
                                          </Image>
                                      </a>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link  href="https://www.instagram.com/">
                                      <a target="_blank" rel="noreferrer">
                                          <Image
                                              src="/images/instagram48.png" 
                                              width="20px"
                                                  height="20px" 
                                                  alt="socialmediaicon"
                                          >
                                          </Image>
                                      </a>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link  href="https://www.linkedin.com/">
                                      <a target="_blank" rel="noreferrer">
                                          <Image
                                              src="/images/linkedin48.png" 
                                              width="20px"
                                                  height="20px" 
                                                  alt="socialmediaicon"
                                          >
                                          </Image>
                                      </a>
                                      </Link>
                                  </li>
                                  <li>
                                      <Link  href="https://www.youtube.com/">
                                      <a target="_blank" rel="noreferrer">
                                          <Image
                                              src="/images/youtube48.png" 
                                              width="20px"
                                                  height="20px" 
                                                  alt="socialmediaicon"
                                          >
                                          </Image>
                                      </a>
                                      </Link>
                                  </li>
                              </ul>
                        </div>
                      </div>            
                    </div>                    
                  </div>
                </div>
              </div> 
            </div>
          </div>   
          <div className={`${styles.product_about} my-4 py-5`}>
            <div className="container">          
              <div className='row'>                
                    <div className={`${styles.productabout_title} mb-5`}>
                      <h6>Description</h6>
                      <h6>Additional Info</h6>
                      <h6>Review</h6>
                      <h6>Video</h6>
                    </div>
                    <div className={styles.productabout_des}>
                      <h6>Verish Tempor</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className={styles.productabout_list}>
                      <h6>More Details</h6>
                      <ul className='ullist'>
                        <li><HiOutlineArrowRight />The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
                        <li><HiOutlineArrowRight />The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
                        <li><HiOutlineArrowRight />The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
                        <li><HiOutlineArrowRight />The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
                      </ul>
                    </div>
              </div>                  
            </div>
          </div>
          <div className="container">
            <div className={styles.relatedpro}>
              <div className={styles.relathead}>
                <h2>Related Products</h2>
              </div>
              <div className='row my-5'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <div className={`${styles.relatedbox} my-2`}>
                    <div className={styles.relatedimg}>
                      <Image
                        src="/images/team1.jpg"
                        width="500px"
                        height='300px'
                        alt="related product image"
                      ></Image>
                    </div>
                    <div className={styles.relatedbody}>
                      <div className={styles.reatedhead}>
                        <h6>Mens Fashion Wear</h6>
                        <span className={styles.reviews}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                      </div>
                      <div className={styles.relatedprice}>
                        <span>$123.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <div className={`${styles.relatedbox} my-2`}>
                    <div className={styles.relatedimg}>
                      <Image
                        src="/images/team2.jpg"
                        width="500px"
                        height='300px'
                        alt="related product image"
                      ></Image>
                    </div>
                    <div className={styles.relatedbody}>
                      <div className={styles.reatedhead}>
                        <h6>Looking Fashion </h6>
                        <span className={styles.reviews}><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></span>
                      </div>
                      <div className={styles.relatedprice}>
                        <span>$199.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <div className={`${styles.relatedbox} my-2`}>
                    <div className={styles.relatedimg}>
                      <Image
                        src="/images/team6.jpg"
                        width="500px"
                        height='300px'
                        alt="related product image"
                      ></Image>
                    </div>
                    <div className={styles.relatedbody}>
                      <div className={styles.reatedhead}>
                        <h6>Formal Wear</h6>
                        <span className={styles.reviews}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></span>
                      </div>
                      <div className={styles.relatedprice}>
                        <span>$79.000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                  <div className={`${styles.relatedbox} my-2`}>
                    <div className={styles.relatedimg}>
                      <Image
                        src="/images/team3.jpg"
                        width="500px"
                        height='300px'
                        alt="related product image"
                      ></Image>
                    </div>
                    <div className={styles.relatedbody}>
                      <div className={styles.reatedhead}>
                        <h6>womens Fashion Wear</h6>
                        <span className={styles.reviews}><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></span>
                      </div>
                      <div className={styles.relatedprice}>
                        <span>$223.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer />
      <div style={{marginBottom:"100px"}}></div>
    </>
}

export default productname;
