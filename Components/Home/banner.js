import styles from '../../styles/Home/Banner.module.css'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banner = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <div className={`${styles.bannerids} bannerid`}>
        <div className={styles.bannerposimg}>
          <Image
            src="/images/bannerlamp1.png"
            width="250px"
            height="200px"
            alt="Banner Image"
          ></Image>
        </div>
        <div className='container'>
          <div className="row">
            
            <Slider {...settings}>
            <div className={styles.items}>
                <div className="row sanalign">
                  <div className="col-md-6">
                    <div className={styles.bannerdetail}>
                      <p className={styles.bannerheadpara}>Best Furniture For Your Castle</p>
                      <h1>New Furniture Collection Trends in 2022</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                      <button className="ecommercebtn">Shop Now</button>
                    </div> 

                  </div>
                  <div className="col-md-6">
                      <div className={styles.bannerimg}>
                        <Image
                          src="/images/banner.png"
                          width="650px"
                          height="600px"
                          alt="Banner Image"
                        ></Image>
                      </div>
                  </div>
                </div>
              </div>
              <div className={styles.items}>
                <div className="row sanalign">
                  <div className="col-md-6">
                    <div className={styles.bannerdetail}>
                      <p className={styles.bannerheadpara}>Best Furniture For Your Castle</p>
                      <h1>New Furniture Collection Trends in 2022</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                      <button className="ecommercebtn">Shop Now</button>
                    </div>                  
                  </div>
                  <div className="col-md-6">
                      <div className={styles.bannerimg}>
                        <Image
                          src="/images/banner1.png"
                          width="650px"
                          height="600px"
                          alt="Banner Image"
                        ></Image>
                      </div>
                  </div>
                </div>
              </div>
            </Slider>              
            
          </div>
        </div>
      </div>
    </>
  )
}

export default banner;
