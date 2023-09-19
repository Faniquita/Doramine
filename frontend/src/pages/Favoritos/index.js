import './favoritos.css'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'


function Favoritos(){
    const[doranimes, setDoranime] = useState([])

    useEffect(()=>{
        const myList = localStorage.getItem("@doramineFlinx")
        setDoranime(JSON.parse(myList) || [])
    },[])

    const favExcluir = (id) =>{
        let filtro = doranimes.filter((doranime)=>{
            return(doranime.id !== id)
        })

        setDoranime(filtro)
        localStorage.setItem("@doramineFlinx", JSON.stringify(filtro))
        toast.success("Dorama/Anime removido com sucesso!")
    }

    return(
        <div className="my-doranime">
            <h1>Meus Favoritos</h1>
            {doranimes.length === 0 && <span>Não possui nenhum Dorama ou Anime salvo como favoritos :( </span>}
            <ul>
                {doranimes.map((doranime) =>{
                    return(
                        <li key={doranime.id}>
                            <span>{doranime.title}</span>
                            <div>
                                <Link to={`/doranime/${doranime.id}`}>Ver detalhes</Link>
                                <button onClick={()=>favExcluir(doranime.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Favoritos;