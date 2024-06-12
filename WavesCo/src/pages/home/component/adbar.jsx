import ad01 from "../../../assets/imgs/ad01.png"
import ad02 from "../../../assets/imgs/ad02.png"
import ad03 from "../../../assets/imgs/ad03.png"
import ad04 from "../../../assets/imgs/ad04.png"
import ad05 from "../../../assets/imgs/ad05.png"
import ad06 from "../../../assets/imgs/ad06.png"
import ad07 from "../../../assets/imgs/ad07.png"

const Adbar = () => {

    return (
        <div className="lg:h-[237px] md:h-[194.6px] w-full">
            <p className="xs:mx-[16px] lg:mt-[50px] md:mt-[40px] xs:mt-[30px] text-center font-[600px] text-titleDark md:text-[20px] md:-tracking-[-2%] xs:text-[18px] xs:leading-[172%] xs:-tracking-[-5%]">Trusted by top Youtuber and Production House</p>
            <div className="md:mx-auto mx-auto lg:mt-[30px] md:mt-[35px] xs:mt-[30px]
            lg:h-[62px] lg:w-[1035.2px] md:h-[49.6px] md:w-[632.74px] xs:h-[119.6px] xs:w-[284.74px]
            flex justify-between items-center flex-wrap  gap-[34px] ">
                <img className='lg:h-[50px] lg:w-[50px] xs:h-[40px] xs:w-[40px]' src={ad01} alt=""/>
                <img className='lg:h-[50px] lg:w-[50px] xs:h-[40px] xs:w-[40px]' src={ad02} alt=""/>
                <img className='lg:h-[54px] lg:w-[77px] xs:h-[44px] xs:w-[62.74px]' src={ad03} alt=""/>
                <img className='lg:h-[62px] lg:w-[50px] xs:h-[49.6px] xs:w-[40px]' src={ad04} alt=""/>
                <img className='lg:h-[25px] lg:w-[94px] xs:h-[21.28px] xs:w-[80px]' src={ad05} alt=""/>
                <img className='lg:h-[25px] lg:w-[130px] xs:h-[17.25px] xs:w-[90px]' src={ad06} alt=""/>
                <img className='lg:h-[50px] lg:w-[50px] xs:h-[40px] xs:w-[40px]' src={ad07} alt=""/>
            </div>

        </div>
    )
}
export default Adbar
