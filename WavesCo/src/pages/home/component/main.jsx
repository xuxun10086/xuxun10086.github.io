import setting from "../../../assets/imgs/setting.png"
import dot3 from "../../../assets/imgs/dot3.png"
import love from "../../../assets/imgs/love.png"
import audio from "../../../assets/imgs/audio.png"
import download from  "../../../assets/imgs/download.png"
import {Link} from "react-router-dom";

const Main = () => {
    const list =[1,2,3,4,5,6]
    return (
        <div className="w-full lg:h-[717px] md:h-[642px] h-[626px]">
            <div className="md:mx-auto mx-[16px] lg:w-[1044px] md:w-[648px]">
                <h3 className="lg:mt-[80px] mt-[50px] lg:h-[45px] md:h-[38px]
                lg:text-[28px] md:text-[24px] text-[20px] lg:leading-[45px] md:leading-[160%] -tracking-[-2%] font-[600] leading-[30px]">Best sound effects for youtube videos</h3>
                <div className="lg:mt-[14px] md:mt-[15px] mt-[14px] lg:h-[518px] md:h-[706px]">
                    <div className="lg:h-[46px] h-[43px] flex justify-between">
                        <ul className="lg:w-[490px] md:w-[451px] w-[174px]
                        flex justify-between items-center
                        lg:text-[16px] text-[14px] font-medium leading-[138%] -tracking-[-5%]">
                            <li>All</li>
                            <li>Jumpscare</li>
                            <li>Mellow</li>
                            <li className="hidden md:block">Happiness</li>
                            <li className="hidden md:block">Ambience</li>
                            <li className="hidden md:block">Zonk</li>
                        </ul>
                        <div className="lg:w-[125px] md:w-[101px] bg-filterGray flex justify-around items-center">
                            <span className="font-medium lg:text-[16px] md:text-[14px] -tracking-[-5%] hidden md:block">Filter</span>
                            <img className="h-[36px] w-[36px]" src={setting} alt=""/>
                        </div>
                    </div>
                    <div className="md:my-[20px] my-[15px]">
                        {list.map((item) => (<Item key={item.toString()}/>))}
                    </div>
                    <Link to="#" className="h-[24px] font-[600] text-[14px] text-btnBlue lg:-tracking-[-1%] md:-tracking-[-5%] underline hover:text-black">
                        See all sound effects
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Main

const Item = () => {
    return (
        <div className="lg:h-[68px] md:h-[56px] lg:pt-[12px] lg:pb-[11px] md:pt-[6px] md:pb-[5px] border-b-eWhite border-b">
            <div
                className=" h-[45px] flex justify-between items-center font-medium lg:text-[16px] md:text-[14px] -tracking-[-5%] leading-[138%] text-descriptionDark ">
                <img className="h-[34px] w-[34px] " src={audio} alt=""/>
                <div className="lg:w-[189px] w-[129px]">
                    <h5 className="text-titleDark">Sound name</h5>
                    <p className="text-[12px]">0:12</p>
                </div>
                <span className="w-[251px] lg:block hidden">
                                Confused excited crowd slight panic and distress
                            </span>
                <span className="lg:w-[212px] md:w-[162px] hidden md:block">
                                Shocking, jumpscare
                            </span>
                <div className="md:w-[148px] w-[82px] flex justify-between">
                    <img className="h-[36px] w-[36px] hidden md:block" src={love} alt=""/>
                    <img className="h-[36px] w-[36px]" src={download} alt=""/>
                    <img className="h-[36px] w-[36px]" src={dot3} alt=""/>
                </div>
            </div>
        </div>
    )
}
