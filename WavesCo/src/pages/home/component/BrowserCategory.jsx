import c01 from "../../../assets/imgs/c-01.png"
import c02 from "../../../assets/imgs/c-02.png"
import c03 from "../../../assets/imgs/c-03.png"
import c04 from "../../../assets/imgs/c-04.png"
import c05 from "../../../assets/imgs/c-05.png"
import c06 from "../../../assets/imgs/c-06.png"
import c07 from "../../../assets/imgs/c-07.png"
import c08 from "../../../assets/imgs/c-08.png"
import c09 from "../../../assets/imgs/c-09.png"
import c10 from "../../../assets/imgs/c-10.png"
import c11 from "../../../assets/imgs/c-11.png"
import c12 from "../../../assets/imgs/c-12.png"
import {Link} from "react-router-dom";


const BrowserCategory = () => {
    const imgs = [c01, c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12]
    return (
        <div className="lg:h-[482px] md:h-[471px] sm:h-[550px] h-[630px] w-full">
            <div className="md:mx-auto xs:mx-[16px] lg:w-[1042px] md:w-[648px] ">
                <h1 className="lg:mt-[60px] md:mt-[40px] mt-[30px]] lg:h-[45px] md:h-[38px] h-[30px]
                lg:text-[28px] md:text-[24px] text-[20px] leading-[45px] text-titleDark -tracking-[-2%] font-[600]">
                    Browse by category
                </h1>

                <div className="mx-auto  md:w-full sm:w-[490px]  xs:w-[288px] lg:mt-[23px] lg:mb-[20px]  mt-[20px] mb-[15px]
                        grid lg:grid-rows-2 lg:grid-cols-6 md:grid-rows-3 md:grid-cols-4 sm:grid-rows-4 sm:grid-cols-3 xs:grid-rows-6 xs:grid-cols-2 gap-[16px]">
                    {imgs.map((img, index) => (
                        <div className="lg:h:[117px] lg:w-[157px] md:h-[90px] md:w-[150px] h-[70px] w-[139px] overflow-hidden rounded-xl">
                            <img
                                className="w-full h-full hover:animate-pulse hover:scale-110 "
                                src={img} alt=""/>
                        </div>
                        /*<img className="lg:h:[117px] lg:w-[157px] md:h-[90px] md:w-[150px] h-[70px] w-[139px] hover:animate-pulse hover:scale-110 " src={img} alt=""/>*/
                    ))}
                </div>
                <Link to="#" className="h-[24px] font-[600] text-[14px] text-btnBlue -tracking-[-1%] underline hover:text-black">See all category</Link>
            </div>
        </div>
    )
}

export default BrowserCategory
