import { createContext, useEffect, useState } from "react";
import { GetMovie } from "../../services/movieApi";

export const MovieContext = createContext()

export default function MovieProvider({children}){
    let [movies,setMovies] = useState([])

    useEffect(() => {GetMovie().then(res => setMovies(res.data))},[])
    
    return(
        <MovieContext.Provider value={{movies,setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}