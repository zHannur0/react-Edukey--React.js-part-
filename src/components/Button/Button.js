function Button(props) {
    return(
        <button className="px-[3%] py-[2%] bg-[#EF7E00] text-white rounded-md">
            {props.text}
        </button>
    );
}

export default Button;