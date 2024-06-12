import advantage01 from "../../../assets/imgs/advantage01.png"
import advantage02 from "../../../assets/imgs/advantage02.png"
import advantage03 from "../../../assets/imgs/advantage03.png"
import advantage04 from "../../../assets/imgs/advantage04.png"

const Advantage = () => {
    const advantages = [
        {
            id: 1,
            img: advantage01,
            title:"1.203.322 Customer satisfied",
            desc:"We've helped more than 1 million customers find best sound effects"
        },{
            id: 2,
            img: advantage02,
            title:"650.654 Sounds",
            desc:"More than 600 thousand high quality to download. Still counting"
        },{
            id: 3,
            img: advantage03,
            title:"Royalty-free",
            desc:"Just download and use the sound for your videos without royalty"
        },{
            id: 4,
            img: advantage04,
            title:"Provide proper sounds",
            desc:"We just provide sounds with the best quality for customers"
        }
    ]
    return (
        <div className="lg:h-[532px] md:h-[620px] h-[959px] w-full">
            <div className="md:mx-auto xs:mx-[16px] lg:w-[1042px] lg:flex lg:justify-between ">
                <div className="lg:mt-[60px] md:mt-[40px] mt-[50px]">
                    <p className="h-[14px] leading-[14px] text-center text-[14px] text-braveYellow">WHY uS?</p>
                    <h2 className="lg:mx-0 mx-auto mt-[17px] lg:w-[337px] md:w-[466px] w-[265px] lg:h-[135px] md:h-[76px] h-[90px]
                    text-center lg:text-left lg:text-[28px] md:text-[24px] sm:text-[20px] font-[600] leading-[45px] -tracking-[-2%] text-titleDark">We are provide the best quality sound effects without copyright.</h2>
                </div>
                <div className="lg:mx-0 mx-auto lg:mt-[60px] md:mt-[40px] mt-[47px] md:w-[602px] md:h-[372px] xs:w-[246px] xs:h-[691px]
                grid  md:grid-rows-2 md:grid-cols-2  xs:grid-cols-1 md:gap-y-[53px] md:gap-x-[110px] xs:gap-y-[30px]">
                    {advantages.map((advantage)=>(
                        <AdvantageItem img={advantage.img} title={advantage.title} desc={advantage.desc} key={advantage.id} />
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Advantage

const AdvantageItem =({img, title, desc})=>{
    return(
        <div className="mx-auto w-[246px] md:h-[160px] sm:h-[151px]">
            <img className="h-[56px] w-[56px]" src={img} alt=""/>
            <h3 className="mt-[21px] w-[246px] h-[31px] md:text-[18px] xs:text-[16px] font-[600] leading-[172%] -tracking-[-5%] xs:text-nowrap">{title}</h3>
            <p className="mt-[4px] w-[246px] h-[48px] font-medium text-[14px] leading-[172%] ">{desc}</p>
        </div>
    )
}
