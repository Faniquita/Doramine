import './favoritos.css'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Favoritos(){
    const[doranimes, setDoranime] = useState([])

    useEffect(()=>{
        const myList = localStorage.getItem("@doramineFlinx")
        setDoranime(JSON.parse(myList) || [])
    },[])

    return(
        <div className="my-doranime">
            <h1>Meus Favoritos</h1>
            <ul>
                {doranimes.map((doranime) =>{
                    return(
                        <li key={doranime.id}>
                            <span>{doranime.title}</span>
                            <div>
                                <Link to={`/doranime/${doranime.id}`}>Ver detalhes</Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Favoritos;