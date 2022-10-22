import styles from '../../styles/Home/Unique.module.css'
import Image from 'next/image';

const unique = () => {
  return (
    <>
      <div className={`${styles.uniquesection} py-5 my-5`}>
        <div className='container'>
            <div className='row'>
                <div className="col-md-6">
                    <div className={styles.uniqueimg}>
                        <Image
                            src="/images/uniquesofa.png"
                            width="650px"
                            height="400px"
                            alt="Banner Image"
                        ></Image>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.uniquedetail}>
                        <h2>Unique Feature of leates and Trending Product</h2>
                        <ul>
                            <li>All frames constructed with hardwood, solid and laminated</li>                            
                            <li>Arms back and seats are structurally reinforced</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>                        
                        <div className={styles.uniquecartprice}>
                            <button className="ecommercebtn">Add To Cart</button>
                            <div className={styles.uniqueprice}>
                                <span>B&B Italian Sofa</span>
                                <span>$32.00</span>
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

export default unique;
