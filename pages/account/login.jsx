import Topheader from '../../Components/Header/topheader'
import Bottomheader from '../../Components/header/bottomheader'
import Footer from "../../Components/Footer"
import styles from '../../styles/Account.module.css'
import {FiLogIn} from "react-icons/fi";
import {MdManageAccounts} from "react-icons/md";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Breadcrum from '../../Components/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.css';

const initialValues = {
    email:'',
    pass:'',
  }


const login = () => {

    const SignUpSchema = Yup.object({
        email: Yup.string().email('Not a proper email').required("Please Enter the Email"),
        pass: Yup.string().required('Please Enter your password').matches(
            "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
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
      HeadingName= 'My Account'
      firstpage= 'Home'
      secondpage = 'pages'
      activepage = 'My Account'
    />
      <div className={`${styles.loginaccount} my-4`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 m-auto'>
                    <div className={styles.formaccounts}>
                        <div className={styles.logintitle}>
                            <h2>Login</h2>
                            <span>Please Login Using Account Detail Below</span>
                        </div>
                        <div className={styles.loginform}>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group my-3">
                                <input type="email" className="form-control" placeholder="Email Accounts" name='email' values={values.email} onChange={handleChange} onBlur={handleBlur}  />
                                { errors.email && touched.email ? (<p className={styles.errorfield}>{errors.email}</p>) : null }
                            </div>
                            <div className="form-group my-3">
                                <input type="password" className="form-control" placeholder="Password" name='pass' values={values.pass} onChange={handleChange} onBlur={handleBlur}  />
                                { errors.pass && touched.pass ? (<p className={styles.errorfield}>{errors.pass}</p>) : null }
                            </div>
                            <Link href='#'>
                                <a className={styles.forgotpass}>Forgot Your Password?</a>
                            </Link><br /><br />
                            <button className="ecommercebtn w-100">Sign In</button>        
                            <div className={styles.cretateacc}>
                                <Link href='#'><a><span>Don&apos;t have an Account?Create Account</span></a></Link>
                            </div>                    
                        </form>
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-6'>
                    <div className={styles.formaccounts}>
                        <div className={styles.logintitle}>
                            <h2>Create Account</h2>
                        </div>
                        <div className={styles.loginform}>
                            <div className={styles.accntdes}>
                                <p>Sign up for a free account. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                            </div>
                            <br />
                            <Link href="/account/register"><a><button className={`${styles.loginbtn} `}><MdManageAccounts />Create An Account</button></a></Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default login;
