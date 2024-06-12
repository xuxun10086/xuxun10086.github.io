import dotdot from "../../../assets/imgs/dotdot.png"
import avatar01 from "../../../assets/imgs/avatar01.png"
import avatar02 from "../../../assets/imgs/avatar02.png"
import avatar03 from "../../../assets/imgs/avatar03.png"
import dotdotdot from "../../../assets/imgs/dotdotdot.png"
const Comments = () => {
    const comments = [
        {
            id: 1,
            avatar: avatar01,
            name: "Anne Joyce",
            comment: "The sounds from WavesCo is great and it really helps our team to save time and production costs.",
            category:"Video editor at Dude Perfect"
        },{
            id: 2,
            avatar: avatar02,
            name: "Edward Sann",
            comment: "WavesCo was a great choice for our team for film production, the quality is amazingly great.",
            category:"Head of Video editor at Netflix"
        },{
            id: 3,
            avatar: avatar03,
            name: "Ronn D.",
            comment: "Perfect way to get best quality sound effects for youtube videos. Thanks to WavesCo team.",
            category:"Video Editor at PewDiePie"
        }
    ]

    return (
        <div className="w-full lg:h-[692px] md:h-[643px] xs:h-[625px]">
            <p className="xs:mt-[50px] xs:h-[14px] md:mt-[60px] h-[14px] text-center font-[600] text-[14px] text-braveYellow">TESTIMONIALS</p>
            <h3 className="xs:mt-[20px] xs:h-[60px] xs:text-[20px]
            md:mt-[50px] md:h-[38px] md:text-[24px]
            lg:mt-[20px]  lg:h-[39px]
            text-center font-[600]  -tracking-[-2%]">Hear good experiences from our customers</h3>

            <div className="mx-auto xs:mt-[40px] xs:h-[371px] xs:w-[304px]
                        md:mt-[40px] md:w-[648px] md:h-[371px]
                        lg:w-[975px] lg:h-[333px] md:flex md:justify-between xs:flex xs:justify-center">
                {comments.map((comment)=>(
                    <div
                        key={comment.id}
                        className={`${comment.id === 2 ? 'xs:hidden md:block' : ''} ${comment.id === 3 ? 'xs:hidden lg:block' : ''}`}
                        >
                        <CommentCard
                            key={comment.id}
                            avatar={comment.avatar}
                            name={comment.name}
                            comment={comment.comment}
                            category={comment.category}
                        />
                    </div>
                ))}
            </div>
            <img className="mx-auto mt-[29px] h-[8px] w-[44px]"  src={dotdotdot} alt=""/>
        </div>
    )
}
export default Comments

const CommentCard =({avatar,name,comment,category})=>{
    return (
        <div className="
                xs:h-[333px] xs:w-[287px]
                md:w-[305px] md:h-[333px] px-[20px] pt-[20px]
                border border-eWhite rounded-xl text-center "
        >
            <img className="mx-auto h-[40px] w-[40px]" src={dotdot} alt=""/>
            <p className="mt-[10px] h-[72px] text-[14px] font-medium text-descriptionDark">
                {comment}
            </p>
            <div className="mx-auto mt-[10px] w-[90px] h-[80] pt-[10px]">
                <img className="h-[70px] w-[70px]" src={avatar} alt=""/>
            </div>
            <h5 className="mt-[10px] h-[31px] text-[18px] font-[600] -tracking-[-5%] text-titleDark">{name}</h5>
            <p className="h-[24px] text-[14px] font-medium text-descriptionWhite">{category}</p>
        </div>
    )
}
