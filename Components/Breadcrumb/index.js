
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import styles from "../../styles/Breadcrum.module.css"

const Breadcrum = (props) => {
  return (
    <>
      <div className={styles.breadcrumbsection}>
        <div className='container'>
            <div className='row'>
                <div className={styles.breaddetail}>
                    <div className={styles.breadhead}>
                        <h1>{props.HeadingName}</h1>
                    </div>
                    <div className={`${styles.breadcrumb} breadcrampglob mt-2`}>
                        <Breadcrumb>
                            <BreadcrumbItem><a href="#">{props.firstpage}</a></BreadcrumbItem>
                            <BreadcrumbItem><a href="#">{props.secondpage}</a></BreadcrumbItem>
                            <BreadcrumbItem active>{props.activepage}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrum
