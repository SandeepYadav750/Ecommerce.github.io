import styles from '../../styles/FlterBy.module.css'
import {BiListUl} from 'react-icons/bi'
import {BsBorderAll} from 'react-icons/bs'

const FilterBy = () => {
  return (
    <>
      <div className='container'>        
        <div className={styles.filterby}>
                        <div className='row sanalign'>
                            <div className='col-md-5'>
                                <div className={styles.filtertitle}>
                                    <h4>Ecommerce Accearies and Fashion Item</h4>
                                    <p>About 9,000 results[0.0098s]</p>
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className={styles.filtercat}>
                                    <div className={styles.category}>
                                            <label className='form-group'>Per<span className={styles.filtersslash}>_</span>Page: </label>
                                            <input type='text' className={`${styles.perpage} form-control`}/>
                                    </div>
                                    <div className={styles.category}>
                                            <label className='form-group'>Sort<span className={styles.filtersslash}>_</span>By: </label>
                                            {/* <input type='text' className='form-control'/> */}
                                            <select className={`${styles['form-select']} form-select`} aria-label="Default select example">
                                              <option selected>Best Match</option>
                                              <option value="1">One</option>
                                              <option value="2">Two</option>
                                              <option value="3">Three</option>
                                            </select>
                                    </div>
                                    <div className={styles.category}>
                                        <label className='form-group'>View: </label>
                                        <BsBorderAll />
                                        <BiListUl />
                                        <input type='text' className='form-control'/>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
      </div>
    </>
  )
}

export default FilterBy
