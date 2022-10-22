import styles from '../../styles/Home/TopCategory.module.css'
import SextionHeading from '../Section_Heading'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const topcategory = () => {

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
            heading="Top Category"
        />
        <div className='Trendingproduct'>
            <div className='container'>
                <div className='row'>
                    <Slider {...settings}>
                        <div className={`${styles.topcategorybox} my-4`}>
                            <div className={styles.topcategoryimg}>
                                <Image
                                    src="/images/lcw1.png"
                                    width="200px"
                                    height="200px"
                                    alt="topcategory image"
                                ></Image>
                                <div className={styles.topcategorydetail}>
                                    <div className={styles.topcategorydinone}>
                                        <button className="btngreendetail">View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.topcategorybody}>
                                <div className={styles.topcategorytitle}><h6>Mini LCW Chair1</h6></div>
                                <div className={styles.topcategoryprice}>
                                    <span className={styles.topcategorycurrcount}>$119.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.topcategorybox} my-4`}>
                            <div className={styles.topcategoryimg}>
                                <Image
                                    src="/images/lcw2.png"
                                    width="200px"
                                    height="200px"
                                    alt="topcategory image"
                                ></Image>
                                <div className={styles.topcategorydetail}>
                                    <div className={styles.topcategorydinone}>
                                        <button className="btngreendetail">View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.topcategorybody}>
                                <div className={styles.topcategorytitle}><h6>Mini LCW Chair2</h6></div>
                                <div className={styles.topcategoryprice}>
                                    <span className={styles.topcategorycurrcount}>$399.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.topcategorybox} my-4`}>
                            <div className={styles.topcategoryimg}>
                                <Image
                                    src="/images/lcw3.png"
                                    width="200px"
                                    height="200px"
                                    alt="topcategory image"
                                ></Image>
                                <div className={styles.topcategorydetail}>
                                    <div className={styles.topcategorydinone}>
                                        <button className="btngreendetail">View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.topcategorybody}>
                                <div className={styles.topcategorytitle}><h6>Mini LCW Chair3</h6></div>
                                <div className={styles.topcategoryprice}>
                                    <span className={styles.topcategorycurrcount}>$99.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.topcategorybox} my-4`}>
                            <div className={styles.topcategoryimg}>
                                <Image
                                    src="/images/lcw4.png"
                                    width="200px"
                                    height="200px"
                                    alt="topcategory image"
                                ></Image>
                                <div className={styles.topcategorydetail}>
                                    <div className={styles.topcategorydinone}>
                                        <button className="btngreendetail">View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.topcategorybody}>
                                <div className={styles.topcategorytitle}><h6>Mini LCW Chair4</h6></div>
                                <div className={styles.topcategoryprice}>
                                    <span className={styles.topcategorycurrcount}>$249.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.topcategorybox} my-4`}>
                            <div className={styles.topcategoryimg}>
                                <Image
                                    src="/images/lcw5.png"
                                    width="200px"
                                    height="200px"
                                    alt="topcategory image"
                                ></Image>
                                <div className={styles.topcategorydetail}>
                                    <div className={styles.topcategorydinone}>
                                        <button className="btngreendetail">View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.topcategorybody}>
                                <div className={styles.topcategorytitle}><h6>Mini LCW Chair5</h6></div>
                                <div className={styles.topcategoryprice}>
                                    <span className={styles.topcategorycurrcount}>$179.00</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    {/* <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                        
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default topcategory
