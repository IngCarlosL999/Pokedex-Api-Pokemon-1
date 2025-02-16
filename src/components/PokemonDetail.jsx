import { colorByTypes, colorByStat } from "../constants/pokemon";
import Evolutions from "./Evolutions";


const PokemonDetail = ({pokemon}) => {
  return (
    <>
      <header className="absolute  left-1/2 -translate-x-1/2 -translate-y-[90%] z-20 scale-[180%]">
        <img className="pixelated" src={pokemon?.image} alt="" />
      </header>

      <div className="pt-12 overflow-y-auto px-4 grid gap-2 content-start h-full hidden-scroll">
        <span className="text-slate-400 text-sm font-semibold ">
          N° {pokemon?.id}
        </span>
        <h4 className="font-bold text-2xl capitalize ">{pokemon?.name}</h4>

        <ul className="flex gap-2 justify-center">
          {pokemon?.types.map((type) => (
            <li
              className={`p-1 rounded-md px-2 text-white text-sm ${colorByTypes[type]}`}
              key={type}
            >
              {type}
            </li>
          ))}
        </ul>
        <div>
          <h4 className="font-bold text-sm capitalize ">Pokemon Entry</h4>
          <p className="text-slate-400">{pokemon?.description}</p>
        </div>

        <section className="grid grid-cols-2 gap-4">
          <div className=" grid gap-2">
            <h4 className="font-bold  capitalize ">height</h4>
            <span className="bg-slate-100 block rounded-full p-1">
              {pokemon?.height}
            </span>
          </div>
          <div className=" grid gap-2">
            <h4 className="font-bold  capitalize ">weight</h4>
            <span className="bg-slate-100 block rounded-full p-1">
              {pokemon?.weight}
            </span>
          </div>
        </section>

        <section className="grid gap-2">
          <h4 className="font-bold capitalize">Abilities</h4>
          <ul className="grid grid-cols-2 gap-4">
            {pokemon?.abilities.map((ability) => (
              <li
                key={ability}
                className="bg-slate-100 block rounded-full p-1 capitalize"
              >
                <span>{ability}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-2">
          <h4 className="font-bold capitalize">stats</h4>
          <ul className="flex justify-center gap-2 flex-wrap ">
            {pokemon?.stats.map((stat) => (
              <li
                className={`p-1 rounded-full ${colorByStat[stat.name]}`}
                key={stat.name}
              >
                <div className=" rounded-full w-[26px] aspect-square grid place-content-center ">
                  <span className="text-[10px] text-white font-semibold">
                    {stat.name}
                  </span>
                </div>

                <span className="font-bold text-xs">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-2 mt-2 ">
          <h4 className="font-bold capitalize">Evolutions</h4>
          <Evolutions evolutions={pokemon?.evolutions ?? []} />
        </section>
      </div>
    </>
  );
};

export default PokemonDetail;
