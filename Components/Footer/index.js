import Image from "next/image";
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
            <div className="row">

                <div className={styles.footerimg}>
                    <Image
                        src="/images/partner1.jpg"
                        width="130px"
                        height="80px"
                        alt="footer image"
                    ></Image>
                    <Image
                        src="/images/partner3.jpg"
                        width="130px"
                        height="80px"
                        alt="footer image"
                    ></Image><Image
                        src="/images/partner4.jpg"
                        width="130px"
                        height="80px"
                        alt="footer image"
                    ></Image>
                    <Image
                        src="/images/partner5.jpg"
                        width="130px"
                        height="80px"
                        alt="footer image"
                    ></Image>
                    <Image
                        src="/images/partner6.jpg"
                        width="130px"
                        height="80px"
                        alt="footer image"
                    ></Image>
                </div>
            </div>           
        </div>
      </div>
    </>
  )
}

export default Footer;
