
import { IconX } from "@tabler/icons-react";
import { colorByTypes, colorByStat } from "../constants/pokemon";
import Evolutions from "./Evolutions";
import PokemonDetail from "./PokemonDetail"


const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  
  return (
    <section
      className={`fixed lg:hidden  top-0 left-0 right-0 h-screen transition-all duration-500 ${
        showModal ? "visible opacity-100" : "invisible opacity-0"
      } ${colorByTypes[pokemon?.types[0]]}`}
    >
      <button
        onClick={onCloseModal}
        className="bg-white absolute top-4 right-4 p-1 rounded-md hover:opacity-80 transition-opacity"
      >
        <IconX size={24} stroke={4} />
      </button>

      

      <article
        className={`bg-white h-[85%] absolute w-full  rounded-tl-3xl rounded-tr-3xl  text-center transition-all duration-500  
          ${showModal ? "bottom-0" : "-bottom-full"}`}
      >
       <PokemonDetail pokemon={pokemon} />
      </article>
    </section>
  );
};

export default ModalPokemon;
