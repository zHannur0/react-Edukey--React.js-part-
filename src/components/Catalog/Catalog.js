import React, { useState,useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Catalog() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {

        const apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=6&ratingTo=10&yearFrom=2000&yearTo=2023&page=${page}`;

        async function getData() {
            try{
                const response = await axios.get(apiUrl,{
                    headers: {
                        'X-API-KEY':  process.env.REACT_APP_API_KEY,
                        'Content-Type': 'application/json',
                    },
                }
                );
                
                let temp = response.data.items.filter(movie => movie.nameRu !== null);
                setMovies(temp);
                console.log(response.data);
            }catch(error) {
                console.log("Error", error);
            }
        }

        getData();
    },[page]

    );

    return (
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black px-[2%] pt-[2%]">
            {
                movies.map((video,index) => (
                    <Card key = {index} video = {video}/>
                ))
            }
        </div>
        {
            page === 1 ? (
                <div className="bg-black flex justify-center items-center gap-2 p-6">
                <button className="text-orange-300 text-2xl" >1</button>
                <button className="text-white text-xl" onClick={() => {setPage(2)}}>2</button>
                 </div>
            ) : (
                <div className="bg-black flex justify-center items-center gap-2 p-6">
                <button className="text-white text-xl" onClick={() => {setPage(1)}}>1</button>
                <button className="text-orange-300 text-2xl">2</button>
                </div>
            )
        }
      
        </div>
      

    
   
    );
}

export default Catalog;