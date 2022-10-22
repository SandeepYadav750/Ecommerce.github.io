import styles from '../../styles/Shoplist.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import Link from 'next/link'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineShoppingCart,AiOutlineHeart,AiFillStar,AiOutlineStar} from 'react-icons/ai';

const Shoplist = () => {
  return (
    <>
        <div className='row'>
            <div className='col-md-12 my-3'>
                <div className={styles.shoplistbox}>
                    <div className='row sanalign'>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={styles.shoplistimg}>
                                <Image
                                    src="/images/shoplist1.jpg"
                                    width="350px"
                                    height="250px"
                                    alt="Shop List"
                                ></Image>
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-12 col-12'>
                            <div className={styles.shoplistbody}>
                                <div className={styles.Shoplisttitle}>
                                    <h4>Accumension tinchen</h4>
                                    <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                    </div>
                                </div>
                                <div className={styles.Shoplistprice_review}>
                                    <span className={styles.shoplistprice}><span className={styles.shoplistcurrcount}>$999.00</span><span className={styles.shoplistdiscount}><del>$1299.00</del></span></span><span className={styles.shoplistreview}><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></span>
                                </div>
                                <div className={styles.Shoplistpara}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className={styles.shoplistcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className='col-md-12 my-3'>
                <div className={styles.shoplistbox}>
                    <div className='row sanalign'>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={styles.shoplistimg}>
                                <Image
                                    src="/images/shoplist2.jpg"
                                    width="350px"
                                    height="250px"
                                    alt="Shop List"
                                ></Image>
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-12 col-12'>
                            <div className={styles.shoplistbody}>
                                <div className={styles.Shoplisttitle}>
                                    <h4>Luxury Room Sofa</h4>
                                    <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                    </div>
                                </div>
                                <div className={styles.Shoplistprice_review}>
                                    <span className={styles.shoplistprice}><span className={styles.shoplistcurrcount}>$599.00</span><span className={styles.shoplistdiscount}><del>$499.00</del></span></span><span className={styles.shoplistreview}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /></span>
                                </div>
                                <div className={styles.Shoplistpara}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className={styles.shoplistcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className='col-md-12 my-3'>
                <div className={styles.shoplistbox}>
                    <div className='row sanalign'>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={styles.shoplistimg}>
                                <Image
                                    src="/images/shoplist3.jpg"
                                    width="350px"
                                    height="250px"
                                    alt="Shop List"
                                ></Image>
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-12 col-12'>
                            <div className={styles.shoplistbody}>
                                <div className={styles.Shoplisttitle}>
                                    <h4>Wall Decoration</h4>
                                    <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                    </div>
                                </div>
                                <div className={styles.Shoplistprice_review}>
                                    <span className={styles.shoplistprice}><span className={styles.shoplistcurrcount}>$299.00</span><span className={styles.shoplistdiscount}><del>$399.00</del></span></span><span className={styles.shoplistreview}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                                </div>
                                <div className={styles.Shoplistpara}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className={styles.shoplistcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>  
            <div className='col-md-12 my-3'>
                <div className={styles.shoplistbox}>
                    <div className='row sanalign'>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={styles.shoplistimg}>
                                <Image
                                    src="/images/luxury3.jpg"
                                    width="350px"
                                    height="250px"
                                    alt="Shop List"
                                ></Image>
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-12 col-12'>
                            <div className={styles.shoplistbody}>
                                <div className={styles.Shoplisttitle}>
                                    <h4>Bad Cum Sofa</h4>
                                    <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                    </div>
                                </div>
                                <div className={styles.Shoplistprice_review}>
                                    <span className={styles.shoplistprice}><span className={styles.shoplistcurrcount}>$299.00</span><span className={styles.shoplistdiscount}><del>$399.00</del></span></span><span className={styles.shoplistreview}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                                </div>
                                <div className={styles.Shoplistpara}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className={styles.shoplistcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>  
            <div className='col-md-12 my-3'>
                <div className={styles.shoplistbox}>
                    <div className='row sanalign'>
                        <div className='col-md-4 col-sm-12 col-12'>
                            <div className={styles.shoplistimg}>
                                <Image
                                    src="/images/travel-5.png"
                                    width="350px"
                                    height="250px"
                                    alt="Shop List"
                                ></Image>
                            </div>
                        </div>
                        <div className='col-md-8 col-sm-12 col-12'>
                            <div className={styles.shoplistbody}>
                                <div className={styles.Shoplisttitle}>
                                    <h4>Luxury sofa</h4>
                                    <div className={styles.allcolor}>
                                        <div className={styles.browncolor}></div>
                                        <div className={styles.redcolor}></div>
                                        <div className={styles.bluecolor}></div>
                                    </div>
                                </div>
                                <div className={styles.Shoplistprice_review}>
                                    <span className={styles.shoplistprice}><span className={styles.shoplistcurrcount}>$299.00</span><span className={styles.shoplistdiscount}><del>$399.00</del></span></span><span className={styles.shoplistreview}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                                </div>
                                <div className={styles.Shoplistpara}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className={styles.shoplistcart}>
                                    <ul className='ullist'>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineShoppingCart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><AiOutlineHeart /></a></Link></li>
                                        <li><Link href=""><a className={styles.shoplistcartlink}><BiSearchAlt /></a></Link></li>
                                    </ul>
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

export default Shoplist;
