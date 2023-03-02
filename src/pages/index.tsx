import { type NextPage } from "next";
import Head from "next/head";
import { api } from "../utils/api";
import GameCard from "./component/gameCard";

const Home: NextPage = () => {
  const games = api.game.getGames.useQuery();
  
  return (
    <>
      <body>
        <div className="absolute flex flex-col pt-32 min-h-screen items-start lg:p-32 md:p-28 p-5 z-40 space-y-5">
            <h1 className="text-[#FEB048] text-3xl md:text-5xl lg:text-6xl font-poppinsBold">Pilih games yang<br></br> kamu inginkan</h1>
            <h3 className="font-retro text-[#F4EFD3] text-3xl">Games Individual</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-8 md:gap-8 gap-3 justify-center">
              {games.data ? games.data.map((games) => (
                <GameCard key={games.id} game={games}/>
              )): <div></div>}
            </div>
        </div>
        <div className="relative bg-[#272B52] min-h-screen overflow-hidden">
          <img src={'assets/background/Ellipse 66.svg'} alt="Logo Perak" className='absolute z-10 bottom-24'/>
          <img src={'assets/background/Ellipse 67.svg'} alt="Logo Perak" className='absolute z-20 bottom-64'/>
          <img src={'assets/background/Ellipse 68.svg'} alt="Logo Perak" className='absolute z-30 -bottom-40'/>
          <img src={'assets/elements/star1.svg'} alt="" className="absolute right-0 w-[25%] z-30 pr-32 top-20"/>
          <img src={'assets/elements/star2.svg'} alt="" className="absolute bottom-0 right-96 w-[25%] z-30"/>
          <img src={'assets/elements/crystal1.svg'} alt="" className="absolute bottom-0 right-40 w-[10%] z-30"/>
          <img src={'assets/elements/crystal2.svg'} alt="" className="absolute bottom-0 right-0 w-[15%] z-30"/>
          <img src={'assets/elements/crystal3.svg'} alt="" className="absolute bottom-0 left-28 w-[20%] z-30"/>
        </div>
      </body>
    </>
  );
};

export default Home;
