import {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link, link} from 'react-router-dom'

import './home.css'

//URL da API: 

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: '817986d6157fa28f8eec31ed2da5ed6d',                    
                    language: 'pt-BR',  
                    adult: false,                  
                    page:1
                }
            })

            //console.log(response.data.results.slice(0, 10))
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilmes();
    }, [])


    if(loading){
        return(
            <div className="loading">
                <h2>
                    Carregando Doramine...
                </h2>
            </div>
        )
    } 
    
    return(
        <>
            <div className="container">
               <div className="list">
                    {filmes.map((filme)=>{
                        return(
                            <article key={filme.id}>
                                <strong>{filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                <Link to={`/doranime/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
               </div>
            </div>
        </>
    )
}


export default Home;