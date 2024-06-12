import logo02 from "../../../assets/imgs/logo02.png"
import {Link} from "react-router-dom";

const Footer = () => {
    const categories =[
        {
            title:"Product",
            items:[
                {
                    title:"Browse sounds",
                    link:"#"
                },
                {
                    title:"Pricing",
                    link:"#"
                },
                {
                    title:"FAQ",
                    link:"#"
                },
                {
                    title:"Affiliate",
                    link:"#"
                },
            ]
        },
        {
            title:"Company",
            items:[
                {
                    title:"Blog",
                    link:"#"
                },
                {
                    title:"About us",
                    link:"#"
                },
                {
                    title:"Help",
                    link:"#"
                },
                {
                    title:"Career",
                    link:"#"
                },
            ]
        },
        {
            title:"Social Media",
            items:[
                {
                    title:"Twitter",
                    link:"#"
                },
                {
                    title:"Instagram",
                    link:"#"
                },
                {
                    title:"YouTube",
                    link:"#"
                },
                {
                    title:"Facebook",
                    link:"#"
                },
            ]
        },
    ]

    return (
        <footer className="xs:pt-[40px] md:pt-[46px] lg-pt-[40px] w-full  bg-titleDark">

            <div className=" mx-auto lg:h-[295px] md:h-[436px] xs:h-[634px] lg:w-[1042px] md:w-[648px] lg:flex lg:justify-between">

                <div className="md:mx-0 xs:mx-[16px] xs:mt-[40px] md:mt-[40px] lg:mt-[46px] lg:h-[191.5px] lg:w-[298px] md:h-[162px] md:w-[259px] xs:h-[162px] xs:w-[259px] text-descriptionWhite">
                    <img  className="lg:h-[25.5px] lg::w-[170px] md:h-[21px] md:w-[142px] xs:h-[21px] xs:w-[142px]" src={logo02} alt=""/>
                    <p className="mt-[25px] lg:h-[87px] xs:h-[72px] xs:text-[14px] lg:text-[16px] leading-[180%] -tracking-[-5%]">WavesCo is a platform for providing premium sound effects for Youtube videos, movies and many more.</p>
                    <p className="lg:mt-[30px] xs:mt-[16px] md:mt-[20px] h-[24px] text-[14px]  leading-[172%]">WavesCo ©2021, All rights reserved</p>
                </div>

                <div className="md:mx-0 xs:mx-[16px] xs:mt-[36px] md:mt-[40px] lg:mt-[46px] md:flex md:justify-between lg:w-[593px] md:w-[648px]
                xs:grid xs:grid-cols-2 xs:grid-rows-2 gap-y-[34px]"
                >
                    {categories.map((category,index)=>(
                        <div className="lg:h-[195px] md:h-[154px] ">
                            <h5 className=" lg:h-[31px] md:h-[22px] text-white lg:text-[18px] md:text-[16px] font[600] -tracking-[-5%]">{category.title}</h5>
                            {category.items.map((item,index)=>(
                                <Link className="block mt-[12px] h-[29px] lg:text-[16px] md:text-[14px] text-descriptionWhite -tracking-[-5%]" to={item.link}>{item.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </footer>
    )
}

export default Footer
