import {Link} from "react-router-dom";
import {useState} from "react";
import burger from "../../../assets/imgs/burger.png"

const Navbar = () => {
    const navItems = [
        {
                name: "Home",
                link: "/"
            },
            {
                name: "Best for Youtube",
                link: "#"
            },
            {
                name: "Category",
                link: "#"
            },
            {
                name: "Upgrade",
                link: "#"
            },
            {
                name: "FAQ",
                link: "#"
            },
    ]
    const [isActive, setIsActive] = useState(0);
    const handleClick = (index) => {
        setIsActive(index);
    }
    const [open, setOpen] = useState(false);
    const handleBurger = () => {
        setOpen(!open);
    }

    return (
        <nav className="w-full ">
            <div className="lg:mx-[100px] md:mx-[60px] xs:ms-[16px] flex justify-between items-center lg:h-[84.5px] md:h-[68.5px] xs:h-[69px]">
                <Link to={"/"}>
                    <h1 className="w-[123px] h-[37.24px] bg-logo bg-cover bg-no-repeat bg-center text-[0px]">WavesCo</h1>
                </Link>
                <div className="flex items-center text-white">
                    <ul className="mr-[43px] h-[44px] w-[475px] lg:flex justify-between items-center hidden">
                        {navItems.map((item, index) => (
                            <li>
                                <Link to={item.link} key={index} onClick={() => handleClick(index)}
                                      className={`font-medium text-[14px]  ${isActive === index ? 'text-white ' : 'text-pureWhite '}` }>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="w-[78px] h-[44px] rounded-xl bg-btnBlue text-[14px] hidden lg:block">Login</button>
                    <button onClick={handleBurger}>
                        <img className="h-[48px] w-[48px] lg:hidden xs:block"  src={burger} alt=""/>
                    </button>
                </div>

            </div>
        </nav>
    )
}
export default Navbar
