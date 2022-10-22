import styles from '../../styles/Home/Trending.module.css'
import SextionHeading from '../Section_Heading'
import Image from 'next/image'


const trending = () => {
  return (
    <>
      <SextionHeading 
        heading="Trending product"
      />
      <div className='Trendingproduct'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div className={styles.trendingbox}>
                            <div className={styles.trendingimg}>
                                        <Image
                                            src="/images/cantilever1.png"
                                            width="400px"
                                            height="400px"
                                            alt="Trending image"
                                        ></Image>
                            </div>
                            <div className={styles.trendingbody}>
                                <div className={styles.trendingtitle}><h6>Cantilever Chair1</h6></div>
                                <div className={styles.trendingprice}>
                                    <span className={styles.trendingcurrcount}>$119.00</span><span className={styles.trendingdiscount}><del>$149.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div className={styles.trendingbox}>
                            <div className={styles.trendingimg}>
                                        <Image
                                            src="/images/cantilever2.png"
                                            width="400px"
                                            height="400px"
                                            alt="Trending image"
                                        ></Image>
                            </div>
                            <div className={styles.trendingbody}>
                                <div className={styles.trendingtitle}><h6>Cantilever Chair2</h6></div>
                                <div className={styles.trendingprice}>
                                    <span className={styles.trendingcurrcount}>$50.00</span><span className={styles.trendingdiscount}><del>$59.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div className={styles.trendingbox}>
                            <div className={styles.trendingimg}>
                                        <Image
                                            src="/images/cantilever3.png"
                                            width="400px"
                                            height="400px"
                                            alt="Trending image"
                                        ></Image>
                            </div>
                            <div className={styles.trendingbody}>
                                <div className={styles.trendingtitle}><h6>Cantilever Chair3</h6></div>
                                <div className={styles.trendingprice}>
                                    <span className={styles.trendingcurrcount}>$99.00</span><span className={styles.trendingdiscount}><del>$150.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                        <div className={styles.trendingbox}>
                            <div className={styles.trendingimg}>
                                        <Image
                                            src="/images/cantilever4.png"
                                            width="400px"
                                            height="400px"
                                            alt="Trending image"
                                        ></Image>
                            </div>
                            <div className={styles.trendingbody}>
                                <div className={styles.trendingtitle}><h6>Cantilever Chair4</h6></div>
                                <div className={styles.trendingprice}>
                                    <span className={styles.trendingcurrcount}>$199.00</span><span className={styles.trendingdiscount}><del>$299.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className={styles.offprobox}>
                            <div className={styles.offprohead}>
                                <h5>23% Off In All Products</h5>
                                <button className={styles.offprobtn}>Shop Now</button>
                            </div>
                            <div className={styles.offproimg}>
                                <Image
                                    src="/images/offpro1.png"
                                    width="200px"
                                    height="160px"
                                    alt="Trending offer image"
                                ></Image>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className={styles.offprobox}>
                            <div className={styles.offprohead}>
                                <h5>23% Off In All Product</h5>
                                <button className={styles.offprobtn}>View Collections</button>
                            </div>
                            <div className={styles.offproimg}>
                                <Image
                                    src="/images/offpro2.png"
                                    width="200px"
                                    height="160px"
                                    alt="Trending offer image"
                                ></Image>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-12'>
                        <div className={styles.offprorow}>
                            <div className='row sanalign'>
                                <div className='col-md-4 col-4'>
                                    <div className={styles.offprosideimg}>
                                        <Image
                                            src="/images/offpro2.png"
                                            width="80px"
                                            height="80px"
                                            alt="Trending offer image"
                                        ></Image>
                                    </div>
                                </div>
                                <div className='col-md-8 col-8'>
                                    <div className={styles.offprotitle}>
                                        <p>Executive Seat Chair</p>
                                        <p>$99.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row sanalign'>
                                <div className='col-md-4 col-4'>
                                    <div className={styles.offprosideimg}>
                                        <Image
                                            src="/images/offpro1.png"
                                            width="80px"
                                            height="80px"
                                            alt="Trending offer image"
                                        ></Image>
                                    </div>
                                </div>
                                <div className='col-md-8 col-8'>
                                    <div className={styles.offprotitle}>
                                        <p>Executive Seat Chair</p>
                                        <p>$99.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row sanalign'>
                                <div className='col-md-4 col-4'>
                                    <div className={styles.offprosideimg}>
                                        <Image
                                            src="/images/offpro2.png"
                                            width="80px"
                                            height="80px"
                                            alt="Trending offer image"
                                        ></Image>
                                    </div>
                                </div>
                                <div className='col-md-8 col-8'>
                                    <div className={styles.offprotitle}>
                                        <p>Executive Seat Chair</p>
                                        <p>$99.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default trending
