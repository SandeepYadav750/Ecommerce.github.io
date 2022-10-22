import SextionHeading from '../Section_Heading'
import styles from '../../styles/Home/Latest.module.css'
import Image from 'next/image'
import Link from 'next/link';
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';

const latest = () => {
  return (
    <>
      <SextionHeading 
        heading="Leatest Product"
      />
            <div className='FeaturedProdct'>
                <div className='container'>
                    <div className={`${styles.latesttab} mb-4`}>
                        <ul className='ullist'>
                            <li><Link href='#craft1'><a>New Arival</a></Link></li>
                            <li><Link href='#craft2'><a>Best Sellers</a></Link></li>
                            <li><Link href='#craft3'><a>Featured</a></Link></li>
                            <li><Link href='#craft4'><a>Special Offers</a></Link></li>
                        </ul>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-12 my-3'>
                            <div id="craft1" className={styles.latestitem}>
                                <div className={styles.latestcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                                <div className={styles.latestimg}>
                                    <Image
                                        src="/images/craft2.jpg"
                                        width="400px"
                                        height="400px"
                                        alt="featured image"
                                    ></Image>
                                </div>
                                <div className={styles.latestbody}>
                                    <div className={styles.latesttitle}><h6>Comfort Handy Craft</h6></div>
                                    <div className={styles.latestprice}>
                                        <span className={styles.latestcurrcount}>$120.00</span><span className={styles.latestdiscount}><del>$150.00</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 my-3'>
                            <div id="craft2" className={styles.latestitem}>
                                <div className={styles.latestcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                                <div className={styles.latestimg}>
                                    <Image
                                        src="/images/craft3.jpg"
                                        width="400px"
                                        height="400px"
                                        alt="featured image"
                                    ></Image>
                                </div>
                                <div className={styles.latestbody}>
                                    <div className={styles.latesttitle}><h6>Comfort Handy Craft2</h6></div>
                                    <div className={styles.latestprice}>
                                        <span className={styles.latestcurrcount}>$110.00</span><span className={styles.latestdiscount}><del>$140.00</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 my-3'>
                            <div id="craft3" className={styles.latestitem}>
                                <div className={styles.latestcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                                <div className={styles.latestimg}>
                                    <Image
                                        src="/images/craft4.jpg"
                                        width="400px"
                                        height="400px"
                                        alt="featured image"
                                    ></Image>
                                </div>
                                <div className={styles.latestbody}>
                                    <div className={styles.latesttitle}><h6>Comfort Handy Craft3</h6></div>
                                    <div className={styles.latestprice}>
                                        <span className={styles.latestcurrcount}>$115.00</span><span className={styles.latestdiscount}><del>$175.00</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 my-3'>
                            <div id="craft4" className={styles.latestitem}>
                                <div className={styles.latestcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                                <div className={styles.latestimg}>
                                    <Image
                                        src="/images/craft5.jpg"
                                        width="400px"
                                        height="400px"
                                        alt="featured image"
                                    ></Image>
                                </div>
                                <div className={styles.latestbody}>
                                    <div className={styles.latesttitle}><h6>Comfort Handy Craft4</h6></div>
                                    <div className={styles.latestprice}>
                                        <span className={styles.latestcurrcount}>$99.00</span><span className={styles.latestdiscount}><del>$159.00</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 my-3'>
                            <div id="craft4" className={styles.latestitem}>
                                <div className={styles.latestcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                                <div className={styles.latestimg}>
                                    <Image
                                        src="/images/craft6.jpg"
                                        width="400px"
                                        height="400px"
                                        alt="featured image"
                                    ></Image>
                                </div>
                                <div className={styles.latestbody}>
                                    <div className={styles.latesttitle}><h6>Comfort Handy Craft6</h6></div>
                                    <div className={styles.latestprice}>
                                        <span className={styles.latestcurrcount}>$199.00</span><span className={styles.latestdiscount}><del>$299.00</del></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12 my-3'>
                            <div id="craft3" className={styles.latestitem}>
                                <div className={styles.latestcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.latestcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                                <div className={styles.latestimg}>
                                    <Image
                                        src="/images/craft8.jpg"
                                        width="400px"
                                        height="400px"
                                        alt="featured image"
                                    ></Image>
                                </div>
                                <div className={styles.latestbody}>
                                    <div className={styles.latesttitle}><h6>Comfort Handy Craft7</h6></div>
                                    <div className={styles.latestprice}>
                                        <span className={styles.latestcurrcount}>$59.00</span><span className={styles.latestdiscount}><del>$99.00</del></span>
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

export default latest;
