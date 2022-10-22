import Image from 'next/image';
import styles from '../../styles/aboutus.module.css';

const FeatureAction = (props) => {
  return (
    <>
        <div className='col-lg-3 col-md-6'>
            <div className={`${styles.bestfeaturecard} my-4`}>
                <div className={`${styles.bestfeatureimg} my-3`}>
                    {/* <img className="img-fluid" src={props.Feature} alt="Best Feture image" /> */}
                    <Image
                        src={props.Feature}
                        width="48px"
                        height="48px"
                        alt="Best Feture image"
                    ></Image>
                </div>                
                <div className={styles.bestfeturebody}>
                    <div className={styles.svgcurve}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" 
                        fillOpacity="1" d="M0,320L60,282.7C120,245,240,171,360,128C480,85,600,75,720,96C840,
                        117,960,171,1080,165.3C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,
                        1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                    </div>
                    <h4 className={`${styles['card-text']}`}>{props.name}</h4>   
                    <p className={styles.aboucardpara}>{props.description}</p> 
                    <div className={`${styles.featurebtn_wrap} my-2`}>
                    </div>                              
                </div>                               
            </div>
        </div>
    </>
  )
}

export default FeatureAction;
