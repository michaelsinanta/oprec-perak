import { api } from "../utils/api";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Result() {
  const router = useRouter();
  const games = api.game.getGame.useQuery({ id: String(router.query["eventId"]) });
  const { data } = games;
  const userTypes = api.auth.getUserType.useQuery({ id: String(router.query["typeId"]) });
  const [openModal, setOpenModal] = useState(true);
  
  return (
    <>
      <body>
        <div className="absolute z-40 flex min-h-screen flex-col items-start space-y-5 p-5 pt-28 md:p-28 lg:p-32">
          <h1 className="font-poppinsBold text-3xl text-[#FEB048] md:text-5xl lg:text-5xl">
            Pendaftaran Games Individual
          </h1>
          <h3 className="font-retro text-3xl text-[#F4EFD3]">{data?.name}</h3>
          <div className="space-y-5 lg:w-[75%] md:w-[55%] w-full">

            <h4 className="font-poppinsBold text-[#F4EFD3] text-xl">Terima kasih telah melakukan pendaftaran games di PERAK 2023</h4>

            <div>
              <h4 className="font-poppinsReg text-[#F4EFD3] text-lg">Silahkan melakukan pembayaran biaya pendaftaran sebesar</h4>
              <h4 className="font-poppinsBold text-[#F4EFD3] text-lg">Rp {data?.registerationFee}</h4>
            </div>

            <div>
              <h4 className="font-poppinsBold text-[#F4EFD3] text-md">Melalui nomor rekening:</h4>
              <h4 className="font-poppinsReg text-[#F4EFD3] text-md">Mandiri 6969420<br />Jenius 6969420<br />Gopay 6969420</h4>
            </div>

            <div className="bg-[#4F569E] p-8 border-1 border-black">
              <h4 className="font-poppinsSemi text-white text-2xl mb-2">{router.query["name"]}</h4>
              <h4 className="font-poppinsReg text-white">{router.query["nickname"]} - {userTypes.data?.name}</h4>
            </div>
            <div className="flex space-x-2">
            <div className="font-poppinsBold text-[#F4EFD3] text-sm">Sembunyikan Detil Informasi</div>
            { openModal ? 
            <ExpandMoreIcon onClick={()=>setOpenModal(!openModal)} className="text-white rotate-180"/>
            : 
            <ExpandMoreIcon onClick={()=>setOpenModal(!openModal)} className="text-white"/>
            }
            </div>
            
            {
                openModal ? 
                <div className="space-y-6">
                <div>
                   <h4 className="font-poppinsBold text-[#F4EFD3] text-sm">NPM</h4>
              <h4 className="font-poppinsReg text-[#F4EFD3] text-sm">{router.query["npm"]}</h4>
                </div> 
                <div>
                   <h4 className="font-poppinsBold text-[#F4EFD3] text-sm">ID Line/WhatsApp</h4>
              <h4 className="font-poppinsReg text-[#F4EFD3] text-sm">{router.query["contactInfo"]}</h4>
              </div>
                </div>
                : <div/>
            }

            <div className="flex w-full items-center justify-center space-x-2 rounded-md border-2 border-black bg-[#188C58] p-2 text-white cursor-pointer" onClick={() => { router.push({ pathname: "/" }) }}>
              <div className="font-poppinsReg">Daftar Games Lain</div>
            </div>
          </div>
        </div>
         {/* Assets */}
         <div className="relative min-h-[110vh] overflow-hidden bg-[#272B52] lg:block md:block hidden">
          <img
            src={"assets/background/Ellipse 66.svg"}
            alt="Logo Perak"
            className="absolute left-[410px] bottom-[300px] z-10 -rotate-90"
          />
          <img
            src={"assets/background/Ellipse 67.svg"}
            alt="Logo Perak"
            className="absolute left-[350px] bottom-[400px] z-20 -rotate-90"
          />
          <img
            src={"assets/background/Ellipse 68.svg"}
            alt="Logo Perak"
            className="absolute left-[600px] bottom-[100px] z-30 -rotate-90"
          />
          <img
            src={"assets/elements/star1.svg"}
            alt=""
            className="absolute right-0 bottom-56 z-30 w-[28%] pr-32"
          />
          <img
            src={"assets/elements/star2.svg"}
            alt=""
            className="absolute bottom-0 right-96 z-30 w-[22%] "
          />
          <img
            src={"assets/elements/crystal1.svg"}
            alt=""
            className="absolute top-[40px] right-20 z-30 w-[13%] -rotate-90"
          />
          <img
            src={"assets/elements/crystal2.svg"}
            alt=""
            className="absolute top-0 right-0 z-30 w-[15%] -rotate-90"
          />
          <img
            src={"assets/elements/crystal3.svg"}
            alt=""
            className="absolute bottom-0 right-[-50px] z-30 w-[20%] -rotate-90"
          />
           <img
            src={"assets/elements/symbol1.svg"}
            alt=""
            className="absolute bottom-[550px] right-[440px] z-30 w-[30px] -rotate-90"
          />
           <img
            src={"assets/elements/symbol2.svg"}
            alt=""
            className="absolute bottom-20 right-[300px] z-30 w-[20px] -rotate-90"
          />
           <img
            src={"assets/elements/symbol3.svg"}
            alt=""
            className="absolute bottom-0 right-[340px] z-30 w-[50px] -rotate-90"
          />
        </div>

        <div className="relative min-h-[115vh] overflow-hidden bg-[#272B52] lg:hidden md:hidden block">
       
          <img
            src={"assets/background/Ellipse 67.svg"}
            alt="Logo Perak"
            className="absolute z-20 bottom-[130px] scale-150"
          />
          <img
            src={"assets/background/Ellipse 68.svg"}
            alt="Logo Perak"
            className="absolute bottom-0 z-30 scale-150"
          />
          <img
            src={"assets/elements/star1.svg"}
            alt=""
            className="absolute bottom-[550px] z-30 w-[180px] -right-5"
          />
          <img
            src={"assets/elements/reversedstar.png"}
            alt=""
            className="absolute bottom-[250px] z-30 w-[160px] right-0"
          />
        </div>
      </body>
    </>
  );
}
