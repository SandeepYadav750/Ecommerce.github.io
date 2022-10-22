
import BlogCommon from "./CommonBlog/BlogCommon";
import Travel1 from "../../public/images/travel-1.jpg";
import Travel2 from "../../public/images/travel-2.jpg";
import Travel3 from "../../public/images/travel-3.jpg";
import styles from "../../styles/BlogComp.module.css";
import SextionHeading from '../Section_Heading'

const Blog = () => {

const currntdate = new Date().toDateString();

  return (
    <>
    <div className={`${styles.homeblog} py-5`}>
      <SextionHeading 
        heading='Leatest Blog'
      />
      <div className={`${styles.Bloguspage} mt-5`}>
        <div className='container'>   
          <div className={styles.blog_wrap}>
            <div className='row'>
              <BlogCommon 
                Travel = "/images/travel-1.jpg"
                name = "Top Essential trends in 2022"
                description ="Some quick example text to build on the card title and make up the bulk of the card's content."
                currntdate = {currntdate}
                links='/blogdetail'
              />
              <BlogCommon 
                Travel = "/images/travel-2.jpg"
                name = "Top Essential trends in 2022"
                description ="Some quick example text to build on the card title and make up the bulk of the card's content."
                currntdate = {currntdate}
              />
              <BlogCommon 
                Travel = "/images/travel-3.jpg"
                name = "Top Essential trends in 2022"
                description ="Some quick example text to build on the card title and make up the bulk of the card's content."
                currntdate = {currntdate}
              />
                
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Blog;
