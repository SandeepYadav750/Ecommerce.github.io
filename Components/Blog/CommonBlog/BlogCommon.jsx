import React from 'react';
import styles from "../../../styles/BlogComp.module.css";
import Links from 'next/link';
import Image from 'next/image';
import {FaLeaf} from 'react-icons/fa'

const BlogCommon = (props) => {
  return (
    <>
        <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className={styles.blogcard}>
                <Image
                    src={props.Travel}
                    width="356px"
                    height="237px"
                    className={`${styles["card-img-top"]}`}
                    alt="BlogCard"
                >
                </Image>
                <div className={`${styles['cardbox']} card-body `}>
                    <p className={styles.cardtimerow}><span className={styles.blogownername}><FaLeaf />Sabar Ali</span><i className={`${styles.calicon} fa fa-calendar`} aria-hidden="true"></i> <span className={styles.cardcalndr}>{props.currntdate}</span></p>
                    <h5 className={`${styles['card-title']}`}>{props.name}</h5>
                    <p className={`${styles['carddescip']} card-text `}>{props.description}</p> 
                    <Links href="/blogdetail"><a  className={styles.bloglink} >Read More </a></Links>

                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCommon;
