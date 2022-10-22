import styles from '../../styles/Home/Shopexoffer.module.css'
import SextionHeading from '../Section_Heading'


const shopexoffer = () => {
  return (
    <>
      <SextionHeading 
        heading="What shopex offer!"
      />
      <div className='Shopexoffer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className={styles.Shopexofferbox}>
                        <div className={styles.Shopexofferimg}>
                            {/* <Image
                                src="/image/"
                                width="300px"
                                height="300px"
                                alt="offer Image"  
                            ></Image> */}
                        </div>
                        <div className={styles.Shopexofferbody}>
                            <div className={styles.Shopexoffertitle}>
                                <h4>24/7 Support</h4>
                            </div>
                            <div className={styles.Shopexofferpara}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className={styles.Shopexofferbox}>
                        <div className={styles.Shopexofferimg}>
                            {/* <Image
                                src="/image/"
                                width="300px"
                                height="300px"
                                alt="offer Image"  
                            ></Image> */}
                        </div>
                        <div className={styles.Shopexofferbody}>
                            <div className={styles.Shopexoffertitle}>
                                <h4>24/7 Support</h4>
                            </div>
                            <div className={styles.Shopexofferpara}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className={styles.Shopexofferbox}>
                        <div className={styles.Shopexofferimg}>
                            {/* <Image
                                src="/image/"
                                width="300px"
                                height="300px"
                                alt="offer Image"  
                            ></Image> */}
                        </div>
                        <div className={styles.Shopexofferbody}>
                            <div className={styles.Shopexoffertitle}>
                                <h4>24/7 Support</h4>
                            </div>
                            <div className={styles.Shopexofferpara}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className={styles.Shopexofferbox}>
                        <div className={styles.Shopexofferimg}>
                            {/* <Image
                                src="/image/"
                                width="300px"
                                height="300px"
                                alt="offer Image"  
                            ></Image> */}
                        </div>
                        <div className={styles.Shopexofferbody}>
                            <div className={styles.Shopexoffertitle}>
                                <h4>24/7 Support</h4>
                            </div>
                            <div className={styles.Shopexofferpara}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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

export default shopexoffer;
