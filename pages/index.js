import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Banner from '../Components/Home/banner'
import Featured from '../Components/Home/featured'
import Latest from '../Components/Home/latest'
import Shopexoffer from '../Components/Home/shopexoffer'
import Unique from '../Components/Home/unique'
import Trending from '../Components/Home/trending'
import Discountitem from '../Components/Home/discountitem'
import Topcategory from '../Components/Home/topcategory'
import Newsletter from '../Components/Home/newsletter'
import Footer from "../Components/Footer"
import Blog from "../Components/Blog"
import Image from "next/image";
import Links from 'next/link';
import styles from "../styles/Index.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  
  return (
  <>
      <Topheader />
      <Bottomheader />
      <Banner />
      <Featured />
      <Latest />
      <Shopexoffer />
      <Unique />
      <Trending />
      <Discountitem />
      <Topcategory />
      <Newsletter />
      <Blog />
      {/* <Footer /> */}
</>
  )
}
