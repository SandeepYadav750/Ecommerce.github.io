import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Footer from "../Components/Footer";
import styles from "../styles/faq.module.css"
import { useFormik } from 'formik';
import * as   Yup from "yup";
import Breadcrum from '../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';

const initialValues = {
    Fullname:'',
    Subject:'',
    Message:''
  }

const faq = () => {

    const SignUpSchema = Yup.object({
        Fullname: Yup.string().min(2).max(20).required("Please Enter the Fullname"),
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
      HeadingName= 'FAQ&apos;s'
      firstpage= 'Home'
      secondpage = 'pages'
      activepage = 'FAQ&apos;s'
    />
      <div className='faq_page my-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className={`${styles.faqwrap} `}>
                        {/* faq start */}
                            <div className={`${styles.content_faq} mb-5`}>
                                <h3 className='heading' >General Information</h3>
                            </div>
                            <div className="panel-group sanmargt" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className={`${styles.panel} ${styles['panel-default']} mb-3`}>
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className={styles['panel-title']}>
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Donec vestibulum nibh at diam volutpat euismod?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div className={`${styles['panel-body']}`}>
                                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummy.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummyLorem Ipsum is simply dummydard dummy.
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.panel} ${styles['panel-default']} mb-3`}>
                                    <div className="panel-heading" role="tab" id="headingtwo">
                                        <h4 className={styles['panel-title']}>
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                                            Where can I get some?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapsetwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingtwo">
                                        <div className={`${styles['panel-body']}`}>
                                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummy.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummyLorem Ipsum is simply dummydard dummy.
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.panel} ${styles['panel-default']} mb-3`}>
                                    <div className="panel-heading" role="tab" id="headingthree">
                                        <h4 className={styles['panel-title']}>
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
                                                Latin professor at Hampden-Sydney?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapsethree" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingthree">
                                        <div className={`${styles['panel-body']}`}>
                                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummy.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummyLorem Ipsum is simply dummydard dummy.
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.panel} ${styles['panel-default']} mb-3`}>
                                    <div className="panel-heading" role="tab" id="headingfour">
                                        <h4 className={styles['panel-title']}>
                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                                            Why do we use it?
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapsefour" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingfour">
                                        <div className={`${styles['panel-body']}`}>
                                                Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummy.Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem 
                                                Ipsum has been the industry&apos;s standard dummyLorem Ipsum is simply dummydard dummy.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* faq end */} 
                    </div>
                </div>
                <div className='col-md-5'>
                <div className={styles.faqcontactbox}>
                    <div className={`${styles.content_faq} mt-2 mb-5`} >
                        <h3 className='heading' >Ask a Question</h3>
                    </div>
                    <div className={styles.faqcontact}>
                    <form onSubmit={handleSubmit}>
                      <div className={styles.form_field_wrap}>
                        <div className='row'>
                            <div className="form-group col-md-12 my-3 position-relative">
                              <input type="text" className="form-control" name="Fullname" values={values.Fullname} onChange={handleChange} onBlur={handleBlur}  placeholder="Your Name*" />
                              { errors.Fullname && touched.Fullname ? (<p className='errorfield'>{errors.Fullname}</p>) : null }
                            </div>                           
                            <div className="form-group col-md-12 my-3 position-relative">
                              <input type="text" className="form-control" name="Subject" values={values.Subject} onChange={handleChange} onBlur={handleBlur}  placeholder="Subject*" />
                              { errors.Subject && touched.Subject ? (<p className='errorfield'>{errors.Subject}</p>) : null }
                            </div>
                            <div className="form-group col-md-12 my-3 position-relative">
                              <textarea className="form-control" name="Message"  rows="6" values={values.Message} onChange={handleChange} onBlur={handleBlur}  placeholder="Type Your Message*" ></textarea>
                              { errors.Message && touched.Message ? (<p className='errorfield'>{errors.Message}</p>) : null }
                            </div>
                        </div>
                        
                        <button className="ecommercebtn">Send Mail</button>

                      </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default faq
