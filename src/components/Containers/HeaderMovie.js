import React, { useState,useEffect } from "react";
import axios from "axios";

function HeaderMovie() {
    const [movieData, setMovieData] = useState({});
    const [changeMovie, setMovie] = useState(true);

    useEffect(() => {
        let random = Math.floor(Math.random() * 11) + 300;

        const apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${random}`;

        async function getData() {
            try{
                const response = await axios.get(apiUrl,{
                    headers: {
                        'X-API-KEY': process.env.REACT_APP_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
                );

                setMovieData(response.data);
                console.log(response.data);
            }catch(error) {
                console.log("Error", error);
            }
        }

        getData();
    },[changeMovie]

    );

    return(
        <div className="relative h-[90vh] flex flex-col justify-center items-cetner bg-cover bg-no-repeat bg-center" style = {{backgroundImage: `url(${movieData["coverUrl"]})`}}>
            <div className="flex flex-col justify-center text-center items-center gap-2">
                <h1 className="text-7xl font-montserrat text-white">
                    {movieData["nameRu"]}
                </h1>
                <h2 className="max-w-[60%] font-manrope text-white text-xl shadow-sm shadow-black/20 dark:shadow-black/40">
                    {movieData["shortDescription"]}
                </h2>
            </div>
            <div className="absolute flex bottom-16 left-20 w-[40%] gap-3">
                <button className="bg-[#EF7E00] text-white rounded-full font-manrope px-[4%] py-[2%]">
                    Watch movie
                </button>
                <button className = "bg-[#1d1d1d] text-white font-manrope py-[1%] px-[2%] rounded-full" onClick={()=>{setMovie(!changeMovie)}}>
                    Next movie
                </button>
            </div>
        </div>
    )
}

export default HeaderMovie;