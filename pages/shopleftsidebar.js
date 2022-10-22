import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Breadcrum from '../Components/Breadcrumb'
import Footer from "../Components/Footer"
import Shoplists from '../Components/ShoplistCom'
import Shopleftsidebar  from '../Components/Shopleftsidebar'
import FilterBy from '../Components/FilterBy'

const Shopleftsidebars = () => {
  return (
    <>
        <Topheader />
        <Bottomheader />
        <Breadcrum
            HeadingName= 'Shop Left Sidebar'
            firstpage= 'Home'
            secondpage = 'pages'
            activepage = 'Shop Left Sidebar'
        />
        <div className='Shopleftsidebar margbttom'>
            <FilterBy />
            <div className='container'>                
                <div className='row'>
                    <div className='col-md-3'>
                        <Shopleftsidebar />
                    </div>
                    <div className='col-md-9'>
                        <Shoplists />
                    </div>
                </div>                
            </div>
        </div>
        {/* <Footer />       */}
    </>
  )
}

export default Shopleftsidebars;
