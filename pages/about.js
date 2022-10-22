import Topheader from '../Components/Header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from '../Components/Footer'
import SextionHeading from '../Components/Section_Heading'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/aboutus.module.css'
import Aboutfeature from '../Components/AboutusFeatured'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
// import dynamic from "next/dynamic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = () => {

//   const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//     ssr: false,
//   });

// const Responsive ={
//   0:{
//     items:1,
//     margin:5,
//   },
//   500:{
//     items:1.4,
//     margin:8,
//   },
//   990:{
//     items:2,
//     margin:10,
//   },
//   1200:{
//     items:3,
//     margin:12,
//   },
// }

//react-slick start

var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
};

  return (
    <>
    <Topheader />
    <Bottomheader />
    <Breadcrum
      HeadingName= 'About Us'
      firstpage= 'Home'
      secondpage = 'pages'
      activepage = 'About Us'
    />
      <div className="aboutuspage">
        <div className="container">
          <div className={`${styles.aboutus_wrap} my-5`}>
            <div className="row sanalign">
              <div className="col-md-6">
                <div className={styles.aboutimg}>
                  <Image
                    src="/images/busigoship.jpg"
                    width="550px"
                    height="400px"
                    alt="aboutusimage"
                  >
                  </Image>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.aboutdetail}>
                  <h1>Know About Our Ecommerce Business, History</h1>
                  <p>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Link href="/contact"><a><button className="ecommercebtn">Contact Us</button></a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.aboutfeature} my-5`}>
            <SextionHeading 
              heading="Our Features"
            />
            <div className='row'>
                            <Aboutfeature 
                              Feature = "/images/feature1.png"
                              name ="Free Delivery"
                              description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                             
                            />
                            <Aboutfeature 
                              Feature = "/images/feature2.png"
                              name ="100% Cash Back"
                              description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            />
                            <Aboutfeature 
                              Feature = "/images/feature3.png"
                              name ="Quality Cashback"
                              description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            />
                            <Aboutfeature 
                              Feature = "/images/feature4.png"
                              name ="24/7 Support"
                              description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            />
                            
            </div>
          </div>
        </div>        
        <div className={`${styles.testimonial} testimonials my-5 py-5`}>
          <SextionHeading 
              heading="Our Client Say!"
            />
          <div className='col-md-6 m-auto'>
            <div className='row'>
              <Slider {...settings}>
                  <div className={`${styles.testimonialbox} `}>
                    <div className={styles.testimonialimg}>
                        <Image
                          src='/images/avatar.jpg'
                          width='100px'
                          height="100px"
                          alt="testimonial Image"
                        ></Image>
                    </div>
                    <div className={styles.testimonialbody}>
                      <div className={styles.testimonialHeading}>
                        <h4>Nandish</h4>
                      </div>
                      <div className={styles.testimonialSubHeading}>
                        <p>Co-Owner</p>
                      </div>
                      <div className={styles.testimonialDescrip}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                  </div>  
                  <div className={`${styles.testimonialbox} `}>
                    <div className={styles.testimonialimg}>
                        <Image
                          src='/images/avatar2.jpg'
                          width='100px'
                          height="100px"
                          alt="testimonial Image"
                        ></Image>
                    </div>
                    <div className={styles.testimonialbody}>
                      <div className={styles.testimonialHeading}>
                        <h4>Isha Rani</h4>
                      </div>
                      <div className={styles.testimonialSubHeading}>
                        <p>Founder</p>
                      </div>
                      <div className={styles.testimonialDescrip}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                  </div> 
              </Slider>
            </div>
          </div>
        </div>
      </div>
    {/* <Footer /> */}
    </>
  )
}

export default About;
