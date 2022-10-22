import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from '../Components/footer'
import styles from '../styles/blogdetail.module.css'
import Image from 'next/image'
import { useFormik } from 'formik';
import * as   Yup from "yup";
import Link from 'next/link';
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';
import {FaLeaf} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'

const initialValues = {
    Fullname:'',
    Email:'',
    Message:''
  }

const blogdetail = () => {

    const SignUpSchema = Yup.object({
        Fullname: Yup.string().min(2).max(20).required("Please Enter the Fullname"),
        Email: Yup.string().email('Not a proper email').required("Please Enter the Email"),
        Message: Yup.string().min(2).required("Please Enter the Message"),
    })
    
      const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema:SignUpSchema,
        onSubmit:(values) => {
          console.log(values);
      
        },
      });

    const currntdate = new Date().toDateString();

  return (
    <>
      <Topheader />
      <Bottomheader />
    <Breadcrum
      HeadingName= 'Single Blog'
      firstpage= 'Home'
      secondpage = 'pages'
      activepage = 'Single Blog'
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
                                <input type='search' className="form-control" placeholder='search for posts' />
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
                    <div className={styles.blog_detail}>
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
                                <p>Donec vestibulum nibh at diam volutpat euismod. Donec non fringilla nulla. Ut accumsan ante felis. Pellentesque maximus arcu quis tincidunt fringilla. Aenean a elit accumsan, pulvinar libero a, bibendum eros. Phasellus elementum porta justo. Cras a pulvinar augue. Cras pretium eros mauris, nec varius lacus ullamcorper sit amet.</p>
                                <p>Nulla hendrerit, enim non porttitor pretium, turpis urna dignissim tortor, eget tempus urna orci non nisi. Aenean sed mi tellus. Integer eu dui gravida, porttitor quam vitae, sollicitudin sapien. Curabitur rutrum ex ac urna lobortis condimentum. In metus dui, scelerisque eu sodales vitae, pretium quis tellus. Vestibulum odio orci, lobortis quis auctor ut, tristique sed erat.</p>
                                <p>Vestibulum vel nisl sit amet eros malesuada congue. Cras sagittis varius sapien, ut tincidunt elit viverra ac. Quisque at magna vel nulla tristique pretium id id urna. Donec sed vestibulum magna.</p>
                                <p>Sed eros mauris, eleifend ut risus sit amet, blandit condimentum ante. Sed dignissim massa in diam varius, nec aliquet ipsum feugiat. Cras rutrum lorem ac neque aliquet, eget tincidunt leo interdum. In hac habitasse platea dictumst. Fusce eu justo a purus molestie consequat. Ut vehicula, nulla vitae cursus mattis, lacus purus vestibulum velit, sit amet dignissim tellus ex et diam. </p>
                            </div>
                        </div>
                        <div className='col-md-12 my-5'>
                            <div className={`${styles.blognext} my-5`}>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <div className={styles.blognextimg}>
                                            <Image
                                                src="/images/travel-2.jpg"
                                                width="120px"
                                                height="125px"
                                                alt="NextBlog image"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div className='col-md-10'>                                        
                                        <div className={styles.blognextbody}>
                                            <div className={styles.blognexttitle}>
                                                <h5>Cardio sentifosa</h5>
                                                <span>{currntdate}</span>
                                            </div>
                                            <div className={styles.blognextdes}>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The printing and typesetting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.blognext} my-5`}>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <div className={styles.blognextimg}>
                                            <Image
                                                src="/images/travel-5.png"
                                                width="120px"
                                                height="125px"
                                                alt="NextBlog image"
                                            ></Image>
                                        </div>
                                    </div>
                                    <div className='col-md-10'>                                        
                                        <div className={styles.blognextbody}>
                                            <div className={styles.blognexttitle}>
                                                <h5>ventila certifa</h5>
                                                <span>{currntdate}</span>
                                            </div>
                                            <div className={styles.blognextdes}>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The printing and typesetting</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faqcontact}>
                    <form onSubmit={handleSubmit}>
                      <div className={styles.form_field_wrap}>
                        <div className='row'>
                            <div className="form-group col-md-6 mb-2 mt-2 position-relative">
                              <input type="text" className="form-control" name="Fullname" values={values.Fullname} onChange={handleChange} onBlur={handleBlur}  placeholder="Your Name*" />
                              { errors.Fullname && touched.Fullname ? (<p className='errorfield'>{errors.Fullname}</p>) : null }
                            </div>                           
                            <div className="form-group col-md-6 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Email"  values={values.Email} onChange={handleChange} onBlur={handleBlur}  placeholder="Write Your Email*" />
                              { errors.Email && touched.Email ? (<p className='errorfield'>{errors.Email}</p>) : null }
                            </div>
                            <div className="form-group col-md-12 mb-2 mt-2 position-relative">
                              <textarea className="form-control" name="Message"  rows="6" values={values.Message} onChange={handleChange} onBlur={handleBlur}  placeholder="Write Your Comment Here*" ></textarea>
                              { errors.Message && touched.Message ? (<p className='errorfield'>{errors.Message}</p>) : null }
                            </div>
                        </div>
                        
                        <button className="ecommercebtn">Continue Shipping</button>

                      </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default blogdetail
