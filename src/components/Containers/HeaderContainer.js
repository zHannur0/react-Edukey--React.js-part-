import Header from "../Layouts/Header";

function HeaderContainer() {
    return(
        <div className='relative h-[100vh] bg-cover bg-no-repeat bg-ryan-gosling'>
        <Header/>
        <h1 className = "absolute bottom-[10%] font-instrument-serif flex justify-center text-white text-8xl text-center ">
            Unleash the magic of movies, anytime, anywhere.</h1>
      </div>
    );
}

export default HeaderContainer;