import { useEffect,useState } from "react"
import axios from "axios"
import { colorByTypes } from "../constants/pokemon";

const PokemonPreview = ({pokemonURL, onClick}) => {

    const[pokemon,setPokemon] = useState(null);



    useEffect(()=>{
        axios.get(pokemonURL)
        .then(({data})=>setPokemon(data))
        .catch((err)=>console.log(err))
  
    },[])
  

  return (
    <article
    onClick={()=>onClick(pokemon)}
    className="text-center bg-white rounded-[30px] relative font-semibold capitalize pb-5 shadow-lg shadow-slate-400/10 border-transparent border-2 hover:border-slate-200 cursor-pointer group grid gap-2">
        <header className="h-9">
          <img
          className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-110 transition-all pixelated"
          src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt={pokemon?.name} />
        </header>
        <span className="text-sm text-slate-400">
          {pokemon?.id}
        </span>
        <h4 className="text-lg" >
        {pokemon?.name}
        </h4>
        <ul className="flex gap-2 justify-center">
          {pokemon?.types.map(type=>
          <li className={`p-1 rounded-md px-2 text-white text-sm ${colorByTypes[type.type.name]}`} 
          key={type.type.name}
          >{type.type.name}</li>)}
        </ul>
        

    </article>
  )
}

export default PokemonPreview