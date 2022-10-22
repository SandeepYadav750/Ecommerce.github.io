import styles from '../styles/ShopGridDefault.module.css'
import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Breadcrum from '../Components/Breadcrumb'
import FilterBy from '../Components/FilterBy'
import Footer from '../Components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import Link from 'next/link'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';

const shopgriddefault = () => {
  return (
    <>
        <Topheader />
        <Bottomheader />
        <Breadcrum
            HeadingName= 'Shop Grid Default'
            firstpage= 'Home'
            secondpage = 'Pages'
            activepage = 'Shop Grid Default'
        />
        <div className='Shopgriddefault'>
                <FilterBy />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/craft3.jpg"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Comfort Handy Craft</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$999.00</span><span className={styles.shopgriddiscount}><del>$1299.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/jalape.png"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Jalape Speaker</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$259.00</span><span className={styles.shopgriddiscount}><del>$299.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/offpro2.png"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Comfort Item Box</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$40.00</span><span className={styles.shopgriddiscount}><del>$50.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/lcw4.png"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Fitsubc club Craft</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$90.00</span><span className={styles.shopgriddiscount}><del>$120.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/craft6.jpg"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Craft</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$499.00</span><span className={styles.shopgriddiscount}><del>$699.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/jalape.webp"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>turning voice</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$229.00</span><span className={styles.shopgriddiscount}><del>$259.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/offpro1.png"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>comfort</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$170.00</span><span className={styles.shopgriddiscount}><del>$210.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/lcw2.png"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Fitsix Craft</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$190.00</span><span className={styles.shopgriddiscount}><del>$220.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/chair2.jpg"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Smooth Chair</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$320.00</span><span className={styles.shopgriddiscount}><del>$350.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/cantilever4.jpg"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>lerverup</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$123.00</span><span className={styles.shopgriddiscount}><del>$159.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/lcw1.png"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>Mini LCW</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$90.00</span><span className={styles.shopgriddiscount}><del>$120.00</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 my-4'>
                        <div className={styles.shopgriditem}>
                            <div className={styles.shopgridcart}>
                                <ul className='ullist'>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><AiOutlineHeart /></a></Link></li>
                                    <li><Link href=""><a className={styles.shopgridcartlink}><BiSearchAlt /></a></Link></li>
                                </ul>
                            </div>
                            <div className={styles.shopgridimg}>
                                <Link href=""><a>
                                    <Image
                                        src="/images/cantilever3.jpg"
                                        width="300px"
                                        height="300px"
                                        alt="Shop Gird image"
                                    ></Image>
                                </a></Link>
                            </div>
                            <div className={styles.shopgridbody}>
                                <div className={styles.shopgridtitle}><h6>cantilever</h6></div>
                                <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                </div>
                                <div className={styles.shopgridprice}>
                                    <span className={styles.shopgridcurrcount}>$180.00</span><span className={styles.shopgriddiscount}><del>$210.00</del></span>
                                </div>
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

export default shopgriddefault
