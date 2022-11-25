import { useEffect } from "react"
export default function AnimeQuotes(){
    useEffect(()=> {
        fetch ('http://animechan.vercel.app/api/random').then(function(response){
            console.log(response.json());
        })
        .then(function(data)
        {
            console.log(data);
        })
    })
    return(
        <div>
            <h1> Anime Quotes </h1>
        </div>
    )
}