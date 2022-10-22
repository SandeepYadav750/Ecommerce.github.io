import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from "../Components/Footer";
import { useFormik } from 'formik';
import styles from '../styles/contact.module.css'
import * as   Yup from "yup";
import "yup-phone";
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';


const initialValues = {
  Fullname:'',
  Email:'',
  Number:'',
  Subject:'',
  Message:''
}

function Contact() {

  const SignUpSchema = Yup.object({
    Fullname: Yup.string().min(2).max(20).required("Please Enter the Fullname"),
    Email: Yup.string().email('Not a proper email').required("Please Enter the Email"),
    // Number: Yup.string().phone("IN", "Please enter a valid phone number").required("Please Enter the Number"),
    Subject: Yup.string().min(2).max(30).required("Please Enter the Subject"),
    Message: Yup.string().min(2).required("Please Enter the Message"),
})

  const {values, errors,touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:SignUpSchema,
    onSubmit:(values) => {
      console.log(values);
  
    },
  });

  return (
    <>
      <Topheader />
      <Bottomheader />
    <Breadcrum
      HeadingName= 'Contact Us'
      firstpage= 'Home'
      secondpage = 'pages'
      activepage = 'Contact Us'
    />
      <div id='contactus'>        
        <div className='container'>
          <div className={`${styles.contact_wrap} my-4`}>
            <div className='row my-5'>
              <div className='col-md-6'>
                  <div className={styles.contacthead}>
                    <h2>Information About Us</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>   
                        <div className={styles.allcolor}>
                          <span className={styles.Bluecolor}></span>
                          <span className={styles.Pinkcolor}></span>
                          <span className={styles.Greencolor}></span>
                        </div>
                  </div>
              </div>
              <div className='col-md-6'>
                  <div className={styles.contacthead}>
                    <h2>Contact Way</h2>
                  </div>
                  <div className={styles.contact_address}>
                    <div className='row'>
                      <div className='col-6'>
                        <div className={styles.contactlinkspan}>
                        <span className={styles.Bluecolor}></span>
                          <div className={styles.contactlink}>
                          <a href='tel:+91 9876543211'>Tel:+91 9876543211</a><br />
                          <a href="mailto:88academics@gmail.com">E-mail:88academics@gmail.com</a>
                          </div>
                        </div>                        
                      </div>
                      <div className='col-6'>
                        <div className={styles.contactlinkspan}>                        
                        <span className={styles.Pinkcolor}></span>
                          <span>Support Forum For Over 24hrs</span>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className={styles.contactlinkspan}>
                          <span className={styles.Yellowcolor}></span>
                          <span>Alpha 3, greater noida, uttar pradesh 201310</span>
                        </div>                        
                      </div>
                      <div className='col-6'>
                        <div className={styles.contactlinkspan}>
                        <span className={styles.Greencolor}></span>
                          <span>Free standard Shipping on all orders</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className='row my-2'>
              <div className='col-sm-6'>              
                  <div className={styles.contact_form_field}>
                    <div className={styles.contacthead}>
                      <h2>Get In  Touch</h2>
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className={styles.form_field_wrap}>
                        <div className='row'>
                            <div className="form-group col-md-6 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Fullname" values={values.Fullname} onChange={handleChange} onBlur={handleBlur}  placeholder="Your Name*" />
                              { errors.Fullname && touched.Fullname ? (<p className='errorfield'>{errors.Fullname}</p>) : null }
                            </div>
                            <div className="form-group col-md-6 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Email"  values={values.Email} onChange={handleChange} onBlur={handleBlur}  placeholder="Your E-mail*" />
                              { errors.Email && touched.Email ? (<p className='errorfield'>{errors.Email}</p>) : null }
                            </div>
                            <div className="form-group col-md-12 mb-4 mt-2 position-relative">
                              <input type="text" className="form-control" name="Subject" values={values.Subject} onChange={handleChange} onBlur={handleBlur}  placeholder="Subject*" />
                              { errors.Subject && touched.Subject ? (<p className='errorfield'>{errors.Subject}</p>) : null }
                            </div>
                            <div className="form-group col-md-12 mb-4 mt-2 position-relative">
                              <textarea className="form-control" name="Message"  rows="4" values={values.Message} onChange={handleChange} onBlur={handleBlur}  placeholder="Type Your Message*" ></textarea>
                              { errors.Message && touched.Message ? (<p className='errorfield'>{errors.Message}</p>) : null }
                            </div>
                        </div>
                        
                        <button className="ecommercebtn">Send Mail</button>

                      </div>
                    </form>                          
                  </div>
              </div>
              <div className='col-sm-6'>
                <div className={styles.contactimg}>
                  <Image
                    src="/images/contactus.jpg"
                    width="400px"
                    height="400px"
                    alt="contact image"
                  ></Image>
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

export default Contact;