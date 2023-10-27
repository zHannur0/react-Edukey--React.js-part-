import Instagram from "../../accests/images/insta.png";
import Facebook from "../../accests/images/fb.png";
import Youtube from "../../accests/images/youtube.png";
import TikTok from "../../accests/images/tiktok.png";
import Pinterst from "../../accests/images/pinterest.png";

function Footer() {
    return(
        <div className="flex justify-between bg-black px-[15%] py-[4%]">
            <img src = {Instagram} className = "w-8 h-8" alt = "insta"/>
            <img src = {Facebook} className = "w-8 h-8" alt = "facebook"/>
            <img src = {Youtube} className = "w-10 h-8" alt = "youtube"/>
            <img src = {TikTok}  className = "w-8 h-8"alt = "tiktok"/>
            <img src = {Pinterst} className = "w-8 h-8" alt = "pinterst"/>
        </div>
    );
}

export default Footer;