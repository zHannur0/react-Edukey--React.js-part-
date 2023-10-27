import Button from "../Button/Button";

function MainContainer() {
    return(
        <div className="flex flex-col items-center px-[35%] py-[5%] text-white bg-black text-center gap-3">
        <h1 className="font-instrument-serif text-3xl">Movie Mania</h1>
        <p className="font-manrope">
        Explore a diverse collection of the latest flicks from spine-chilling horrors to side-splitting comedies. Grab some popcorn and get comfy, the show is about to begin!
        </p>
        <Button text = "Watch Now"/>
      </div>
    );
}

export default MainContainer;