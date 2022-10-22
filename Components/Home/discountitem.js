import styles from '../../styles/Home/Discountitem.module.css'
import SextionHeading from '../Section_Heading'
import Link from 'next/link';
import Image from 'next/image';
import {BsCheckLg} from 'react-icons/bs'

const discountitem = () => {
  return (
    <>
    <SextionHeading 
        heading="Discount Item"
    />
        <div className='Discountitem'>
            <div className='container'>
                <div className={`${styles.discountitemtab} mb-5`}>
                    <ul className='ullist'>
                        <li><Link href='#'><a>Wood Chair</a></Link></li>
                        <li><Link href='#'><a>Plastic Chair</a></Link></li>
                        <li><Link href='#'><a>Sofa Collection</a></Link></li>
                    </ul>
                </div>
                <div className='row  my-2'>
                    <div className="col-md-6 order-sm-2">
                      <div className={styles.bannerimg}>
                        <Image
                          src="/images/discountitem.jpg"
                          width="650px"
                          height="400px"
                          alt="Discount Item Image"
                        ></Image>
                      </div>
                    </div>
                    <div className='col-md-6 order-sm-1'>
                        <div className={styles.discountitembox}>
                            <h1>20% Off In All Products</h1>
                            <p className={styles.discountitempara}>Eams Sofa Compact</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                            <ul className={`${styles.discountitemlist} ullist`}>
                                <li><BsCheckLg />Single Nuterial Colors</li>
                                <li><BsCheckLg />Single Nuterial Colors</li>
                                <li><BsCheckLg />Single Nuterial Colors</li>
                                <li><BsCheckLg />Single Nuterial Colors</li>
                            </ul>
                            <button className="ecommercebtn">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default discountitem
