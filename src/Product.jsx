import React, { useContext, useState } from "react";
import { data, good } from "./PROJECTS/Movie";
import { Link } from "react-router-dom";



function Product() {


    const name = useContext([data])
    const name1 = useContext(good)
    return (
        <div>
            <h1>More information abaut the movie {name}</h1>
            <h1> {name1}</h1>
            <button><Link to="/Movie">HOME</Link></button>

            <div>
                <p>
                    <details><h1>Movie History</h1>
                        <summary>
                            "Title": "Prisoners",
                            "Year": "2013",
                            "Rated": "R",
                            "Released": "20 Sep 2013",
                            "Runtime": "153 min",
                            "Genre": "Crime, Drama, Mystery, Thriller",
                            "Director": "Denis Villeneuve",
                            "Writer": "Aaron Guzikowski",
                            "Actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis, Maria Bello",
                            "Plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
                            "Language": "English",
                            "Country": "USA",
                            "Awards": "Nominated for 1 Oscar. Another 10 wins & 35 nominations.",
                            "Year": "2013",
                            "Rated": "R",
                            "Year": "2013",
                            "Rated": "R",
                            "Released": "20 Sep 2013",
                            "Runtime": "153 min",
                            "Genre": "Crime, Drama, Mystery, Thriller",
                            "Director": "Denis Villeneuve",
                            "Writer": "Aaron Guzikowski",
                            "Actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis, Maria Bello",
                            "Plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
                            "Language": "English",
                            "Country": "USA",
                            "Awards": "Nominated for 1 Oscar. Another 10 wins & 35 nominations.",
                            "Year": "2013",
                            "Rated": "R",
                            "Released": "20 Sep 2013",
                            "Runtime": "153 min",
                            "Genre": "Crime, Drama, Mystery, Thriller",
                            "Director": "Denis Villeneuve",
                            "Writer": "Aaron Guzikowski",
                            "Actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis, Maria Bello",
                            "Released": "20 Sep 2013",
                            "Runtime": "153 min",
                            "Genre": "Crime, Drama, Mystery, Thriller",
                            "Director": "Denis Villeneuve",
                            "Writer": "Aaron Guzikowski",
                            "Actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis, Maria Bello",
                            "Plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
                            "Language": "English",
                            "Country": "USA",
                            "Awards": "Nominated for 1 Oscar. Another 10 wins & 35 nominations.",
                        </summary>
                    </details>
                    "Title": "Prisoners",
                    "Year": "2013",
                    "Rated": "R",
                    "Released": "20 Sep 2013",
                    "Runtime": "153 min",
                    "Genre": "Crime, Drama, Mystery, Thriller",
                    "Director": "Denis Villeneuve",
                    "Writer": "Aaron Guzikowski",
                    "Actors": "Hugh Jackman, Jake Gyllenhaal, Viola Davis, Maria Bello",
                    "Plot": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
                    "Language": "English",
                    "Country": "USA",
                    "Awards": "Nominated for 1 Oscar. Another 10 wins & 35 nominations.",
                    "

                    "Ratings":

                    "Source": "Internet Movie Database",
                    "Value": "8.1/10"


                    "Source": "Rotten Tomatoes",
                    "Value": "80%"


                    "Source": "Metacritic",
                    "Value": "74/100"


                    "Metascore": "74",
                    "imdbRating": "8.1",
                    "imdbVotes": "538,786",
                    "imdbID": "tt1392214",
                    "Type": "movie",
                    "DVD": "17 Dec 2013",
                    "BoxOffice": "$60,962,878",
                    "Production": "Warner Bros.",
                    "Website": "N/A",
                    "Response": "True"
                </p>
                <p>

                </p>
                <marquee direction="left"><h3>💰 50% Discount offer Apply on week days💰 Thanks for visit!</h3></marquee>
            </div>

        </div>
    )
}
export default Product;