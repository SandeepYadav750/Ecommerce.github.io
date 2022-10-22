import SextionHeading from '../Section_Heading'
import styles from '../../styles/Home/Featured.module.css'
import Image from 'next/image'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const featured = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <>
      <SextionHeading 
        heading="Featured Products"
      />
      <div className='FeaturedProdct'>
        <div className='container'>
            <div className='row'>
                <Slider {...settings}>
                    <div className={`${styles.featureditem} m-3`}>
                        <div className={styles.featuredcart}>
                            <ul className='ullist'>
                                <li><Link href=""><a className={styles.featuredcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcartlink}><AiOutlineHeart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcartlink}><BiSearchAlt /></a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.featuredimg}>
                            <Image
                                src="/images/chair1.jpg"
                                width="300px"
                                height="200px"
                                alt="featured image"
                            ></Image>
                        </div>
                        <div className={styles.featureddetail}>
                            <div className={styles.featureddinone}>
                                <button className="btngreendetail">View Detail</button>
                            </div>
                        </div>
                        <div className={`${styles.featuredbody} text-center`}>
                            <h4>Cantilever Chair</h4>
                            <span className={styles.featuredrec}><span style={{background:'#5ae0a0'}}></span><span style={{background:'#fa63b8'}}></span><span className={styles.bluehvr}></span></span>                            <p><span>Code - YN82937</span></p>
                            <span>$140.00</span>
                        </div>
                    </div>
                    <div className={`${styles.featureditem} m-3`}>
                        <div className={styles.featuredcart}>
                            <ul className='ullist'>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineShoppingCart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineHeart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><BiSearchAlt /></a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.featuredimg}>
                            <Image
                                src="/images/chair2.jpg"
                                width="300px"
                                height="200px"
                                alt="featured image"
                            ></Image>
                        </div>
                        <div className={styles.featureddetail}>
                            <div className={styles.featureddinone}>
                                <button className="btngreendetail">View Detail</button>
                            </div>
                        </div>
                        <div className={`${styles.featuredbody} text-center`}>
                            <h4>Cantilever Chair2</h4>
                            <span className={styles.featuredrec}><span style={{background:'#5ae0a0'}}></span><span style={{background:'#fa63b8'}}></span><span className={styles.bluehvr}></span></span>
                            <p><span>Code - YN64572</span></p>
                            <span>$199.00</span>
                        </div>
                    </div>
                    <div className={`${styles.featureditem} m-3`}>
                        <div className={styles.featuredcart}>
                            <ul className='ullist'>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineShoppingCart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineHeart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><BiSearchAlt /></a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.featuredimg}>
                            <Image
                                src="/images/chair3.jpg"
                                width="300px"
                                height="200px"
                                alt="featured image"
                            ></Image>
                        </div>
                        <div className={styles.featureddetail}>
                            <div className={styles.featureddinone}>
                                <button className="btngreendetail">View Detail</button>
                            </div>
                        </div>
                        <div className={`${styles.featuredbody} text-center`}>
                            <h4>Cantilever Chair3</h4>
                            <span className={styles.featuredrec}><span style={{background:'#5ae0a0'}}></span><span style={{background:'#fa63b8'}}></span><span className={styles.bluehvr}></span></span>                            <p><span>Code - YN12934</span></p>
                            <span>$110.00</span>
                        </div>
                    </div>
                    <div className={`${styles.featureditem} m-3`}>
                        <div className={styles.featuredcart}>
                            <ul className='ullist'>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineShoppingCart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineHeart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><BiSearchAlt /></a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.featuredimg}>
                            <Image
                                src="/images/chair4.jpg"
                                width="300px"
                                height="200px"
                                alt="featured image"
                            ></Image>
                        </div>
                        <div className={styles.featureddetail}>
                            <div className={styles.featureddinone}>
                                <button className="btngreendetail">View Detail</button>
                            </div>
                        </div>
                        <div className={`${styles.featuredbody} text-center`}>
                            <h4>Cantilever Chair4</h4>
                            <span className={styles.featuredrec}><span style={{background:'#5ae0a0'}}></span><span style={{background:'#fa63b8'}}></span><span className={styles.bluehvr}></span></span>                            <p><span>Code - YNk2943</span></p>
                            <span>$99.00</span>
                        </div>
                    </div>
                    <div className={`${styles.featureditem} m-3`}>
                        <div className={styles.featuredcart}>
                            <ul className='ullist'>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineShoppingCart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><AiOutlineHeart /></a></Link></li>
                                <li><Link href=""><a className={styles.featuredcart}><BiSearchAlt /></a></Link></li>
                            </ul>
                        </div>
                        <div className={styles.featuredimg}>
                            <Image
                                src="/images/offpro1.png"
                                width="300px"
                                height="200px"
                                alt="featured image"
                            ></Image>
                        </div>
                        <div className={styles.featureddetail}>
                            <div className={styles.featureddinone}>
                                <button className="btngreendetail">View Detail</button>
                            </div>
                        </div>
                        <div className={`${styles.featuredbody} text-center`}>
                            <h4>Cantilever Chair5</h4>
                            <span className={styles.featuredrec}><span style={{background:'#5ae0a0'}}></span><span style={{background:'#fa63b8'}}></span><span className={styles.bluehvr}></span></span>                            <p><span>Code - YNk8795</span></p>
                            <span>$59.00</span>
                        </div>
                    </div>
                </Slider>
                {/* <div className='col-lg-3 col-md-6 col-12 my-2'>
                   
                </div> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default featured
