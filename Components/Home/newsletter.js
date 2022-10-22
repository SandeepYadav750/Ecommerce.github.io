import styles from '../../styles/Home/Newsletter.module.css'

const newsletter = () => {
  return (
    <>
      <div className={`${styles.newsletter}`}>
        <div className='conatiner'>
            <div className={styles.newsletterbody}>
                <h2>Get leatest update by subscribe our newsletter</h2>
                <button className="ecommercebtn">Shop Now</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default newsletter;
