const colorByTypes ={
    normal:"bg-[#BCBCAC]",
    fighting: "bg-[#bc5442]",
    flying: "bg-[#669aff]",
    poison: "bg-[#ab549a]",
    ground: "bg-[#debc54]",
    rock: "bg-[#bcac66]",
    bug:"bg-[#abbc1c]",
    ghost:"bg-[#6666bc]",
    steel:"bg-[#abacbc]",
    fire:"bg-[#ff421c]",
    water:"bg-[#2f9aff]",
    grass:"bg-[#78cd54]",
    electric:"bg-[#ffcd30]",
    psychic:"bg-[#ff549a]",
    ice: "bg-[#78deff]",
    dragon:"bg-[#7866ef]",
    dark:"bg-[#785442]",
    fairy:"bg-[#ffacff]",
    unknow:"",
    shadow:"",

  }

  const colorByStat = {
    HP: "[&>div]:bg-red-500 bg-slate-100",
    ATK: "[&>div]:bg-orange-500 bg-slate-100",
    DEF: "[&>div]:bg-yellow-500 bg-slate-100",
    SpA: "[&>div]:bg-blue-300 bg-slate-100",
    SpD: "[&>div]:bg-green-500 bg-slate-100",
    SPD: "[&>div]:bg-pink-500 bg-slate-100",
    TOT: "[&>div]:bg-blue-500 bg-blue-300",
  };

  export {colorByTypes , colorByStat}