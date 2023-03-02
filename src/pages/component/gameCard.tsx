import Link from "next/link";

export default function GameCard(game){
    let color;
    let border;

    if (game.game.id === "0") {
        color = "bg-[#6DB8C2]";
        border = " border-[#2F7A84]";
    } else if (game.game.id === "1") {
        color = "bg-[#8C3FD9]";
        border = " border-[#BA83F2]";
    } else {
        color = "bg-[#242A2B]";
        border = " border-[#4F569E]";
    }

    return(
        <Link  href={{
            pathname: "/form",
            query: {
                event: game.game.id,
            },
          }}>
            <div>
                  <div className={"cursor-pointer outline border-8 flex rounded-md items-center justify-center m-1 hover:scale-105" + border}>
                    <h3 className={"font-retro text-[#F4EFD3] lg:text-3xl md:text-3xl text-xl lg:p-12 md:p-12 p-5 lg:py-20 md:py-20 py-10 flex h-full items-center justify-center" + color}>{game.game.name}</h3>
                  </div>
                </div>
        </Link>
    )

}