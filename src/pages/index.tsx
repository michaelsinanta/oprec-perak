import { type NextPage } from "next";
import Head from "next/head";
import { api } from "../utils/api";
import GameCard from "./component/gameCard";

const Home: NextPage = () => {
  const games = api.game.getGames.useQuery();

  return (
    <>
      <body>
        <div className="absolute z-40 flex min-h-screen flex-col items-start space-y-5 p-5 pt-32 md:p-28 lg:p-32">
          <h1 className="font-poppinsBold text-3xl text-[#FEB048] md:text-5xl lg:text-6xl">
            Pilih games yang<br></br> kamu inginkan
          </h1>
          <h3 className="font-retro text-3xl text-[#F4EFD3]">
            Games Individual
          </h3>
          <div className="grid grid-cols-2 justify-center gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
            {games.data ? (
              games.data.map((games) => (
                <GameCard key={games.id} game={games} />
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="relative hidden min-h-screen overflow-hidden bg-[#272B52] md:block lg:block">
          <img
            src={"assets/background/Ellipse 66.svg"}
            alt="Logo Perak"
            className="absolute bottom-24 z-10"
          />
          <img
            src={"assets/background/Ellipse 67.svg"}
            alt="Logo Perak"
            className="absolute bottom-64 z-20"
          />
          <img
            src={"assets/background/Ellipse 68.svg"}
            alt="Logo Perak"
            className="absolute -bottom-40 z-30"
          />
          <img
            src={"assets/elements/star1.svg"}
            alt=""
            className="absolute right-0 top-20 z-30 w-[25%] pr-32"
          />
          <img
            src={"assets/elements/star2.svg"}
            alt=""
            className="absolute bottom-0 right-[700px] z-30 w-[400px]"
          />
          <img
            src={"assets/elements/crystal1.svg"}
            alt=""
            className="absolute bottom-0 right-[220px] z-30 w-[10%]"
          />
          <img
            src={"assets/elements/crystal2.svg"}
            alt=""
            className="absolute bottom-0 right-0 z-30 w-[15%]"
          />
          <img
            src={"assets/elements/crystal3.svg"}
            alt=""
            className="absolute bottom-0 left-28 z-30 w-[20%]"
          />
          <img
            src={"assets/elements/symbol1.svg"}
            alt=""
            className="absolute bottom-[380px] right-[440px] z-30 w-[30px] -rotate-90"
          />
          <img
            src={"assets/elements/symbol2.svg"}
            alt=""
            className="absolute bottom-[280px] left-[400px] z-30 w-[20px] -rotate-90"
          />
          <img
            src={"assets/elements/symbol3.svg"}
            alt=""
            className="absolute bottom-[300px] left-[340px] z-30 w-[50px] -rotate-90"
          />
        </div>
        <div className="relative block min-h-screen overflow-hidden bg-[#272B52] md:hidden lg:hidden">
          <img
            src={"assets/background/Ellipse 67.svg"}
            alt="Logo Perak"
            className="absolute bottom-[130px] z-20 scale-150"
          />
          <img
            src={"assets/background/Ellipse 68.svg"}
            alt="Logo Perak"
            className="absolute bottom-0 z-30 scale-150"
          />
          <img
            src={"assets/elements/star1.svg"}
            alt=""
            className="absolute bottom-[550px] -right-5 z-30 w-[180px]"
          />
          <img
            src={"assets/elements/reversedstar.png"}
            alt=""
            className="absolute bottom-[250px] right-0 z-30 w-[160px]"
          />
        </div>
      </body>
    </>
  );
};

export default Home;
