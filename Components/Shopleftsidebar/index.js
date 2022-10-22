import styles from "../../styles/shopleftsidebar.module.css"
import {AiFillStar, AiOutlineStar,AiOutlineSearch} from 'react-icons/ai'

const shopleftsidebar = () => {
  return (
    <>
      <div className='sidebar mb-4'>
        <div className='row'>
            <div className={styles.sidebarbox}>
                <div className={styles.sidebarhead}>
                    <p>Product Brand</p>
                </div>
                <div className={`${styles.sidebarlist} sidebarlist1`}>
                    <ul className={styles.sidebarul}>
                        <li><span><input type="checkbox" className={styles.checkbox} id="check1"/><label for="check1">Iphone Watch</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="check2"/><label for="check2">Apple Brand New</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="check3"/><label for="check3">jalape Crasiest speaker</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="check4"/><label for="check4">Headphone 2234ph</label></span></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className='sidebar mb-4'>
        <div className='row'>
            <div className={styles.sidebarbox}>
                <div className={styles.sidebarhead}>
                    <p>Discount Offer</p>
                </div>
                <div className={`${styles.sidebarlist} sidebarlist2`}>
                    <ul className={styles.sidebarul}>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkdis1"/><label for="checkdis1">10% Cashback</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkdis2"/><label for="checkdis2">20% Cashback Offer</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkdis3"/><label for="checkdis3">40% Discount Offer</label></span></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className='sidebar mb-4'>
        <div className='row'>
            <div className={styles.sidebarbox}>
                <div className={styles.sidebarhead}>
                    <p>Rating Item</p>
                </div>
                <div className={`${styles.sidebarlist} sidebarlist3`}>
                    <ul className={styles.sidebarul}>
                        <li><span className={styles.review}><input type="checkbox" className={styles.checkbox} id="checkrev1"/><label for="checkrev1"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><span className={styles.reviewcount}>(231)</span></label></span></li>
                        <li><span className={styles.review}><input type="checkbox" className={styles.checkbox} id="checkrev2"/><label for="checkrev2"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><span className={styles.nonselectstar}><AiFillStar /></span><span className={styles.reviewcount}>(929)</span></label></span></li>
                        <li><span className={styles.review}><input type="checkbox" className={styles.checkbox} id="checkrev3"/><label for="checkrev3"><AiFillStar /><AiFillStar /><AiFillStar /><span className={styles.nonselectstar}><AiFillStar /><AiFillStar /></span><span className={styles.reviewcount}>(122)</span></label></span></li>
                        <li><span className={styles.review}><input type="checkbox" className={styles.checkbox} id="checkrev4"/><label for="checkrev4"><AiFillStar /><AiFillStar /><span className={styles.nonselectstar}><AiFillStar /><AiFillStar /><AiFillStar /></span><span className={styles.reviewcount}>(091)</span></label></span></li>
                        <li><span className={styles.review}><input type="checkbox" className={styles.checkbox} id="checkrev5"/><label for="checkrev5"><AiFillStar /><span className={styles.nonselectstar}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span><span className={styles.reviewcount}>(022)</span></label></span></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className='sidebar mb-4'>
        <div className='row'>
            <div className={styles.sidebarbox}>
                <div className={styles.sidebarhead}>
                    <p>Categories</p>
                </div>
                <div className={`${styles.sidebarlist} sidebarlist2`}>
                    <ul className={styles.sidebarul}>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkcat1"/><label for="checkcat1">Prestashop</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkcat2"/><label for="checkcat2">Mageento</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkcat3"/><label for="checkcat3">Big Commerce</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkcat4"/><label for="checkcat4">3dcart</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkcat5"/><label for="checkcat5">Wtaches</label></span></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className='sidebar mb-4'>
        <div className='row'>
            <div className={styles.sidebarbox}>
                <div className={styles.sidebarhead}>
                    <p>Price Filter</p>
                </div>
                <div className={`${styles.sidebarlist} sidebarlist2`}>
                    <ul className={styles.sidebarul}>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkprice1"/><label for="checkprice1">$00.00-$100.00</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkprice2"/><label for="checkprice2">$101.00-$250.00</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkprice3"/><label for="checkprice3">$251.00-$500.00</label></span></li>
                        <li><span><input type="checkbox" className={styles.checkbox} id="checkprice4"/><label for="checkprice4">$501.00-$1000.00</label></span></li>
                        <li className={styles.searchinput}><input type="text" className='form-control'/><AiOutlineSearch /></li>
                    </ul>
                </div>
            </div>
        </div>
      </div><div className='sidebar mb-4'>
        <div className='row'>
            <div className={styles.sidebarbox}>
                <div className={styles.sidebarhead}>
                    <p>Filter By Color</p>
                </div>
                <div className={styles.sidebarlist}>
                    <ul className={`${styles.sidebarul} ${styles.sidebarulcol}`}>
                        <li><span className={styles.Bluecolor}></span><span>Blue</span></li>
                        <li><span className={styles.Redcolor}></span><span>Red</span></li>
                        <li><span className={styles.Browncolor}></span><span>Brown</span></li>
                        <li><span className={styles.Greencolor}></span><span>Green</span></li>
                        <li><span className={styles.Pinkcolor}></span><span>Pink</span></li>
                        <li><span className={styles.Skycolor}></span><span>Sky</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default shopleftsidebar;
