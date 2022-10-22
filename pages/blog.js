import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from "../Components/Footer"
import Breadcrum from '../Components/Breadcrumb'
import styles from '../styles/blogdetail.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image'
import Link from 'next/link';
import {FaLeaf} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import { useState } from 'react'

const Blog = () => {

  const currntdate = new Date().toDateString();

//   const [currntpage, setcurrntpage] = useState(1);
//   const [postperpage, setpostperpage] = useState(8);

//   const lastpostindex = currntpage * postperpage ;
//   const firstpostindex = lastpostindex * postperpage ;
//   const currentpost = blog_detail.slice(firstpostindex, lastpostindex);

    return (
      <>
      <Topheader />
      <Bottomheader />
      <Breadcrum
        HeadingName= 'Blog Page'
        firstpage= 'Home'
        secondpage = 'pages'
        activepage = 'Blog Page'
      />
    <div className="blogDetailPage my-5">
        <div className='container'>
            <div className='row'>
                <div className='col-md-4  order-sm-2 '>
                    <div className={`${styles.blogdetailpost} mb-4`}>
                            <div className={styles.blogdetailheading}>
                                <h5>Search</h5>
                            </div>
                            <div className={styles.blogsearch}>
                                <input type='search' className="form-control" placeholder='search for posts'/>
                                <BiSearchAlt />
                            </div>
                    </div>
                    <div className={`${styles.blogdetailpost} mb-4`}>
                            <div className={styles.blogdetailheading}>
                                <h5>Categories</h5>
                            </div>
                            <div className={`${styles.blogcategory} my-4`}>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className={styles.blogcatname}>
                                            <h6>Women(21)</h6>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogcatname}>
                                            <h6>Skill(46)</h6>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogcatname}>
                                            <h6>Hobies(33)</h6>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogcatname}>
                                            <h6>women(43)</h6>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogcatname}>
                                            <h6>men(23)</h6>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogcatname}>
                                            <h6>Hobies(23)</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className={`${styles.blogdetailpost} mb-4`}>
                        <div className={styles.blogdetailheading}>
                            <h5>Recent Post</h5>
                        </div>
                        <Link href="#"><a className={styles.postlink}>
                            <div className={`${styles.blogdetaillist} my-2`}>
                                <ul className={styles.blogdetailul}>
                                    <li>
                                        <span className={styles.postimg}>
                                            <Image
                                            src="/images/travel-2.jpg"
                                            width='80px'
                                            height='70px'
                                            alt='Recent Post'
                                            ></Image>
                                        </span>
                                        <span className={styles.postdetail}>
                                            <span className={styles.postdetailname}><h6>Blog 2</h6></span>
                                            <span className={styles.cardtimerow}><i className="fa fa-calendar" aria-hidden="true"></i> <span className={`${styles.cardcalndr} ${styles.postcardcalndr}`}>{currntdate}</span></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </a></Link>
                        <Link href="#"><a className={styles.postlink}>
                            <div className={`${styles.blogdetaillist} my-2`}>
                                <ul className={styles.blogdetailul}>
                                    <li>
                                        <span className={styles.postimg}>
                                            <Image
                                            src="/images/travel-3.jpg"
                                            width='80px'
                                            height='70px'
                                            alt='Recent Post'
                                            ></Image>
                                        </span>
                                        <span className={styles.postdetail}>
                                            <span className={styles.postdetailname}><h6>Blog 3</h6></span>
                                            <span className={styles.cardtimerow}><i className="fa fa-calendar" aria-hidden="true"></i> <span className={`${styles.cardcalndr} ${styles.postcardcalndr}`}>{currntdate}</span></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </a></Link>
                    </div>
                    <div className={`${styles.blogdetailpost} mb-4`}>
                        <div className={styles.blogdetailheading}>
                            <h5>Sale Product</h5>
                        </div>
                        <Link href="#"><a className={styles.postlink}>
                            <div className={`${styles.blogdetaillist} my-2`}>
                                <ul className={styles.blogdetailul}>
                                    <li>
                                        <span className={styles.postimg}>
                                            <Image
                                            src="/images/travel-4.jpg"
                                            width='80px'
                                            height='70px'
                                            alt='Recent Post'
                                            ></Image>
                                        </span>
                                        <span className={styles.postdetail}>
                                            <span className={styles.postdetailname}><h6>Capturing Camera</h6></span>
                                            <span className={styles.cardtimerow}><i className="fa fa-calendar" aria-hidden="true"></i> <span className={`${styles.cardcalndr} ${styles.postcardcalndr}`}>{currntdate}</span></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </a></Link>
                        <Link href="#"><a className={styles.postlink}>
                            <div className={`${styles.blogdetaillist} my-2`}>
                                <ul className={styles.blogdetailul}>
                                    <li>
                                        <span className={styles.postimg}>
                                            <Image
                                            src="/images/travel-5.png"
                                            width='80px'
                                            height='70px'
                                            alt='Recent Post'
                                            ></Image>
                                        </span>
                                        <span className={styles.postdetail}>
                                            <span className={styles.postdetailname}><h6>Western culture</h6></span>
                                            <span className={styles.cardtimerow}><i className="fa fa-calendar" aria-hidden="true"></i> <span className={`${styles.cardcalndr} ${styles.postcardcalndr}`}>{currntdate}</span></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </a></Link>
                    </div>
                    <div className={`${styles.blogdetailpost} mb-4`}>
                            <div className={styles.blogdetailheading}>
                                <h5>Offer Product</h5>
                            </div>
                            <div className={`${styles.blogpmainroduct} my-3`}>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className={styles.blogproductbox}>
                                            <div className={styles.blogproductimg}>
                                                <Image
                                                    src='/images/shoplist1.jpg'
                                                    width="180px"
                                                    height="100px"
                                                    alt="Blog sidebar product"  
                                                ></Image>
                                            </div>
                                            <div className={styles.blogproductname}>
                                                <h6>Nuteus Proin</h6>
                                                <p>$100.00-$200.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogproductbox}>
                                            <div className={styles.blogproductimg}>
                                                <Image
                                                    src='/images/shoplist2.jpg'
                                                    width="180px"
                                                    height="100px"
                                                    alt="Blog sidebar product"  
                                                ></Image>
                                            </div>
                                            <div className={styles.blogproductname}>
                                                <h6>nest nyahoo</h6>
                                                <p>$10.00-$20.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogproductbox}>
                                            <div className={styles.blogproductimg}>
                                                <Image
                                                    src='/images/shoplist3.jpg'
                                                    width="180px"
                                                    height="100px"
                                                    alt="Blog sidebar product"  
                                                ></Image>
                                            </div>
                                            <div className={styles.blogproductname}>
                                                <h6>shoplist</h6>
                                                <p>$200.00-$250.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className={styles.blogproductbox}>
                                            <div className={styles.blogproductimg}>
                                                <Image
                                                    src='/images/travel-5.png'
                                                    width="180px"
                                                    height="100px"
                                                    alt="Blog sidebar product"  
                                                ></Image>
                                            </div>
                                            <div className={styles.blogproductname}>
                                                <h6>shopin</h6>
                                                <p>$130.00-$170.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className={`${styles.blogdetailpost} mb-4`}>
                            <div className={styles.blogdetailheading}>
                                <h5>Follow</h5>
                            </div>
                            <div className={styles.blogsocialmedia}>
                            <ul style={{listStyle:"none",padding:"0",margin:"0"}}>
                            <li>
                                <Link  href="https://www.facebook.com/">
                                <a target="_blank">
                                    <Image
                                        src="/images/facebook48.png" 
                                        width="30px"
                                            height="30px" 
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
                                        width="30px"
                                            height="30px" 
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
                                        width="30px"
                                            height="30px" 
                                            alt="socialmediaicon"
                                    >
                                    </Image>
                                </a>
                                </Link>
                            </li>
                        </ul>
                            </div>
                    </div>
                    <div className={`${styles.blogdetailpost} mb-4`}>
                            <div className={styles.blogdetailheading}>
                                <h5>Search</h5>
                            </div>
                            <div className={styles.blogtags}>
                                <h5>General</h5>
                                <h5>Bibass</h5>
                                <h5>NUlla</h5>
                                <h5>Imas</h5>
                            </div>
                    </div>
                </div>
                <div className='col-md-8 order-sm-1 '>
                    <div className={`${styles.blog_detail} mb-5`}>
                        <div className={styles.blogdetailimg}>
                            <Image
                                src="/images/travel-1.jpg"
                                width="750px"
                                height="500px"
                                alt="Blog Detail image"
                            ></Image>
                        </div>
                        <div className={styles.blogdetailbody}>
                          <p className={styles.cardtimerow}><span className={styles.blogownername}><FaLeaf />Sabar Ali</span><span className={styles.cardcalndr}><i className={`${styles.calicon} fa fa-calendar`} aria-hidden="true"></i> {currntdate}</span></p>
                            <div className={styles.blogdetailheading}>
                                <h1>blog 1</h1>
                            </div>
                            <div className={styles.blogdetailpara}>
                                <p className={styles.blogintwoline}>Donec vestibulum nibh at diam volutpat euismod. Donec non fringilla nulla. Ut accumsan ante felis. Pellentesque maximus arcu quis tincidunt fringilla. Aenean a elit accumsan, pulvinar libero a, bibendum eros. Phasellus elementum porta justo. Cras a pulvinar augue. Cras pretium eros mauris, nec varius lacus ullamcorper sit amet.</p>
                            </div>
                            <div className={styles.blogreadmore}>
                              <Link href="/blogdetail"><a>Read More<span className={styles.blogreadglobe}>*</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.blog_detail} mb-5`}>
                        <div className={styles.blogdetailimg}>
                            <Image
                                src="/images/travel-2.jpg"
                                width="750px"
                                height="500px"
                                alt="Blog Detail image"
                            ></Image>
                        </div>
                        <div className={styles.blogdetailbody}>
                          <p className={styles.cardtimerow}><span className={styles.blogownername}><FaLeaf />Maharana Pratap Singh</span><span className={styles.cardcalndr}><i className={`${styles.calicon} fa fa-calendar`} aria-hidden="true"></i> {currntdate}</span></p>
                            <div className={styles.blogdetailheading}>
                                <h1>blog 2</h1>
                            </div>
                            <div className={styles.blogdetailpara}>
                                <p className={styles.blogintwoline}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                            </div>
                            <div className={styles.blogreadmore}>
                              <Link href="/blogdetail"><a>Read More<span className={styles.blogreadglobe}>*</span></a></Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.blog_detail} mb-5`}>
                        <div className={styles.blogdetailimg}>
                            <Image
                                src="/images/travel-3.jpg"
                                width="750px"
                                height="500px"
                                alt="Blog Detail image"
                            ></Image>
                        </div>
                        <div className={styles.blogdetailbody}>
                          <p className={styles.cardtimerow}><span className={styles.blogownername}><FaLeaf />Narendra Damodar Das Modi</span><span className={styles.cardcalndr}><i className={`${styles.calicon} fa fa-calendar`} aria-hidden="true"></i> {currntdate}</span></p>
                            <div className={styles.blogdetailheading}>
                                <h1>blog 3</h1>
                            </div>
                            <div className={styles.blogdetailpara}>
                                <p className={styles.blogintwoline}>It is a long established fact that a reader will be distracted by the readable content of a page wh&apos;n looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making &apos;t look like readable English.</p>
                            </div>
                            <div className={styles.blogreadmore}>
                              <Link href="/blogdetail"><a>Read More<span className={styles.blogreadglobe}>*</span></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
      </>
    )
  }
  
  export default Blog;