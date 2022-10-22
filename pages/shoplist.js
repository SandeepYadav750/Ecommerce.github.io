import Topheader from '../Components/header/topheader'
import Bottomheader from '../Components/header/bottomheader'
import Breadcrum from '../Components/Breadcrumb'
import Footer from "../Components/Footer"
import Shoplists from '../Components/ShoplistCom'
import FilterBy from '../Components/FilterBy'

const Shoplist = () => {
  return (
    <>
        <Topheader />
        <Bottomheader />
        <Breadcrum
            HeadingName= 'Shop List'
            firstpage= 'Home'
            secondpage = 'pages'
            activepage = 'Shop List'
        />
        <div className='Shoplistdefault margbttom'>
            <FilterBy />
            <div className='container'>                
                <Shoplists />
            </div>
        </div> 
        {/* <Footer />       */}
    </>
  )
}

export default Shoplist;
