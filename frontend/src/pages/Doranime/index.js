import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import '../Doranime/doranime.css'

import api from '../../services/api'
//import { JSON } from 'mysql/lib/protocol/constants/types'

function Doramine(){
    const {id} = useParams()
    const navegate = useNavigate()

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        async function loadDoranime(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: '817986d6157fa28f8eec31ed2da5ed6d',                    
                    language: 'pt-BR',  
                    adult: false,                  
                    page:1
                }
            }).then((response)=>{
                setFilme(response.data)
                setLoading(false)
            }).catch(()=>{
                console.log("Filme não encontrato")
                navegate("/", {replace: true})
                return
            })
        }

        loadDoranime();
        return() =>{
            console.log("Componente foi desmontado")
        }

    }, [navegate, id])


    const saveFilme = () => {
        const myList = localStorage.getItem("@doramineFlinx")
        let doranimeSave = JSON.parse(myList) || [];
        const hasDoranime  = doranimeSave.some((doranimeSalvo)=>doranimeSalvo.id === filme.id)
        
        if(hasDoranime){
            alert("Dorama/Anime já se encontra no favorito")
            return
        }

        doranimeSave.push(filme)
        localStorage.setItem("@doramineFlinx", JSON.stringify(doranimeSave))
        alert("Dorama/Anime salvo com sucesso a lista de favoritos!")
        
    }

    if(loading){
        return(            
            <div className="filme-info">
                <h1>Carregando Detalhes do Dorama/Anime</h1>
            </div>            
        )
    }

    return(
        <>
            <div className="filme-info">
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average}/10</strong>

                <div className="area-buttons">
                    <button onClick={saveFilme}>Salvar</button>
                    <button>
                        <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                    </button>
                </div>

           
            </div>
        </>
    )
}





export default Doramine;