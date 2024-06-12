import search from "../../../assets/imgs/search.png"

const Banner = () => {
    return (
        <div className="lg:h-[566px] md:h-[583] xs:h-[551px] w-full">
            <div className="md:mx-[59px] xs:mx-[15px]" >
                <h2 className="lg:mt-[95px] md:mt-[100px] xs:mt-[56px]
                text-center lg:text-nowrap text-white md:font-bold md:text-4xl md:leading-[146.5%] xs:font-[600] xs:text-[20px] leading-[30px] -tracking-[-2%]">
                    Free download sound effects without copyright
                </h2>
                <h2 className="mt-[16px] text-center md:text-[20px] xs:text-[16px] md:font-medium sx:font[600] md:leading-[170%] xs:leading-[138%]  text-descriptionWhite"
                >Download free copyright sound effect for your YouTube video and any use.</h2>
                <div className="mx-auto relative mt-[51px] md:w-[600px]">
                    <img className="absolute md:mt-[18.5px] xs:mt-[9.5px] ml-[20px] h-[24px] w-[24px]" src={search} alt=""/>
                    <input className=" w-full md:h-[60px] xs:h-[44px] pl-[46.5px]
                    rounded-xl bg-eWhite text-[16px] font-medium leading-[180%] placeholder:text-inputWhite placeholder:font-medium focus:outline-none" placeholder="Search sound effects" type="text"/>
                    <p  className="mt-[10px] text-[14px] text-descriptionWhite leading-[172%]">Try keyword: happy, funny, natural, horror, jumpscare and more</p>
                </div>
                <p className="mt-[51px] text-center font-medium text-[14px] leading-[172%] text-eWhite">650.654 Available Sounds. Library Updated Weekly. See popular sounds</p>
            </div>
        </div>
    )
}

export default Banner
