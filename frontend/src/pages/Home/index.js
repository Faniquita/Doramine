import {useEffect, useState} from 'react'
import api from '../../services/api'

//URL da API: 

function Home(){
    const [filmes, setFilmes] = useState([]);

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

            console.log(response.data.results)

        }

        loadFilmes();
    }, [])



    return(
        <>
            <div>
                <h1>
                    Bem vindo a Home
                </h1>
            </div>
        </>
    )
}


export default Home;