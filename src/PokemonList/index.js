import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Pagination from '../Pagination';
import './styles.css'
import loadingImg from '../assets/loadingIcon.svg'

export default function PokemonList() {   
    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [loading, setLoading] = useState(true);
    
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");

    
    //useEffect hook()
    useEffect(() => {
        setLoading(true)
        let cancel;
        axios.get(currentPage, {
            cancelToken: new axios.CancelToken(c =>cancel = c)
        })
        .then(response => {
        setLoading(false)
        setPokemon(response.data.results.map(p => p.name + '\n'))
        setNextPage(response.data.next)
        setPrevPage(response.data.previous)
        })
        
        return() => {
            cancel();
        }
        
        
    }, [currentPage])


  

    function gotoNextPage() {
        setCurrentPage(nextPage);   
    }

    function gotoPrevPage() {
        setCurrentPage(prevPage);   
    }
    

    if(loading) return <img src={loadingImg} alt='Loading' className="loadingIcon" />
    


    return (
        
        <body>
        <header>
            <h1>PokéApp</h1>
        </header>
        <div className="pokeContainer">
            <ul>
                <li>{pokemon}</li>
            </ul>
            </div>
        <Pagination 
        gotoNextPage={nextPage ?  gotoNextPage : null}
        gotoPrevPage={prevPage ? gotoPrevPage : null}
        />
    
    </body>
    )

        
}
