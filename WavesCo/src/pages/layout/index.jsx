import {Outlet} from "react-router-dom";
import Navbar from "./component/Navbar";
import bannerImg from "../../assets/imgs/banner.png"
import Footer from "./component/footer";

const Layout = () => {
    return (
        <div className="font-['poppins'] relative overflow-hidden">

            <div
                className="absolute w-full lg:h-[650px] md:h-[667px] xs:h-[620px] top-0 left-0 right-0">
                <img src={bannerImg} className="h-full w-full object-cover place-content-center" alt=""/>
            </div>
            <div className="relative z-100">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>

        </div>
    )
}

export default Layout
