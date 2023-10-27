import {Link} from "react-router-dom";

function Header() {
    return(
            <header className="absolute w-full z-[100] top-0 flex justify-between px-[4%] pt-[3%] pb-[1%] text-white font-manrope bg-black/20">
                <Link to="/">
                Home
                </Link>
                <Link to="/movies">
                Movies
                </Link>
                <Link to="/contact">
                Contact
                </Link>
            
            </header>
    );
}

export default Header;