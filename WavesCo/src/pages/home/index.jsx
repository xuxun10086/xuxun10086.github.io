import Banner from "./component/banner";
import Adbar from "./component/adbar";
import Main from "./component/main";
import BrowserCategory from "./component/BrowserCategory";
import Advantage from "./component/advantage";
import Download from "./component/Download";
import Comments from "./component/comments";

const Home = () =>{
    return(
        <div>
            <Banner/>
            <Adbar/>
            <Main/>
            <BrowserCategory/>
            <Advantage/>
            <Download/>
            <Comments/>
        </div>
    )
}

export default Home
