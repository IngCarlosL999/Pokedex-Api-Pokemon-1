// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { IconSearch } from "@tabler/icons-react";
// import PokemonList from "./PokemonList";
// import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// const Pokemons = () => {
//   const INITIAL_LIMIT = 40;
//   const INCREASE_LIMIT = 20;

//   const [allPokemons, setPokemonsAll] = useState([]);
//   const [pokemonName, setPokemonName] = useState("");
//   const pokemonByName = allPokemons.filter((pokemon) =>
//     pokemon.name.startsWith(pokemonName)
//   );
//   const [limit, setLimit] = useState(INITIAL_LIMIT);

//   const targetObserver = useRef(null);
//   const entry = useIntersectionObserver(targetObserver, {});
//   const isVisible = !!entry?.isIntersecting;

//   useEffect(() => {
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/?limit=898")
//       .then(({ data }) => setPokemonsAll(data.results))
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//     const maxPokemons = pokemonByName.length;
//     if (isVisible && maxPokemons != 0) {
//       const newLimit = limit + INCREASE_LIMIT;
//       newLimit > maxPokemons ? setLimit(maxPokemons) : setLimit(newLimit);
//     }
//   }, [isVisible]);

//   useEffect(() => {
//     setLimit(INITIAL_LIMIT);
//   }, [pokemonName]);

//   const handleChangePokemonName = (e) =>
//     setPokemonName(e.target.value.toLowerCase());

//   return (
//     <section className="p-4 py-5">
//       <form>
//         <div className="bg-white p-4 flex rounded-2xl text-lg">
//           <input
//             autoComplete="off"
//             type="text"
//             placeholder="Search your Pokemon"
//             className="outline-none flex-1"
//             name="pokemonName"
//             onChange={handleChangePokemonName}
//           />
//           <button
//             type="button"
//             className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors"
//           >
//             <IconSearch color="white" stroke={3} />
//           </button>
//         </div>
//       </form>
//       <PokemonList pokemons={pokemonByName.slice(0, limit)} />

//       {/* Target Observer */}
//       <span ref={targetObserver}></span>
//     </section>
//   );
// };

// export default Pokemons;

//****************FORMA NO CONTROLADA*******************/
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setPokemonName(e.target.pokemonName.value.toLowerCase());
// };

//*******

import { useEffect, useState } from "react";
import axios from "axios";
import { IconSearch } from "@tabler/icons-react";
import PokemonList from "./PokemonList";

const Pokemons = () => {
  const INITIAL_LIMIT = 898;
  const POKEMONS_PER_PAGE = 45;

  const [allPokemons, setPokemonsAll] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pokemonByName = allPokemons.filter((pokemon) =>
    pokemon.name.startsWith(pokemonName)
  );

  const indexOfLastPokemon = currentPage * POKEMONS_PER_PAGE;
  const indexOfFirstPokemon = indexOfLastPokemon - POKEMONS_PER_PAGE;
  const currentPokemons = pokemonByName.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const [limit, setLimit] = useState(INITIAL_LIMIT);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
      .then(({ data }) => setPokemonsAll(data.results))
      .catch((err) => console.log(err));
  }, [limit]);

  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset the current page when a new search is performed
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="p-4 py-5">

      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            autoComplete="off"
            type="text"
            placeholder="Search your Pokemon"
            className="outline-none flex-1"
            name="pokemonName"
            onChange={handleChangePokemonName}
          />
          <button
            className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors"
          >
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={currentPokemons} />
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(pokemonByName.length / POKEMONS_PER_PAGE) }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === pageNumber ? "bg-red-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Pokemons;
