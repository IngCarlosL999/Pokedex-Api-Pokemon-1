import { useContext } from "react";
import Aside from "./components/Aside"
import ModalPokemon from "./components/ModalPokemon";
import Pokemons from "./components/Pokemons"
import usePokemonContext from "./hooks/usePokemonContext";

function App() {

   const {showDetailPokemon, closePokemonDetail,pokemonDetail, isLoading} =  usePokemonContext();
 
    

  return (
    <>
        <section className="bg-[#f6f8fc] h-screen font-outfit overflow-y-auto pl-5 bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%] overflow-x-hidden">
          <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] ">
            <Pokemons />
            <Aside pokemon={pokemonDetail} isLoading={isLoading} />
            <ModalPokemon 
            showModal={showDetailPokemon}  
            onCloseModal={closePokemonDetail}
            pokemon={pokemonDetail}
            />
           
          </main>
        </section>
       
    </>
  );
}

export default App
