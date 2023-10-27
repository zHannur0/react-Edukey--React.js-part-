import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
function Contact() {
    return (
        <div className="bg-black">
        <Header/>
        <div className="flex justify-center text-[300px] text-[#EF7E00] font-instrument-serif tracking-widest">
           <h1>
                REACH
           </h1>
        </div>
        <div className = "flex text-start text-white text-6xl px-[2%] py-[2%] font-manrope">
            <h2 className = "w-[70%]">
            Tired of unanswered emails and countless hours on hold? Don’t be a victim of communication chaos, contact us today!
            </h2>
        </div>
        <Footer/>
        </div>
    );
  }
  
  export default Contact;