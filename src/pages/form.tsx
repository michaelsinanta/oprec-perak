import { useRecoilState } from "recoil";
import { api } from "../utils/api";
import { eventIdState, isModalOpenState } from "./storage/storage";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { AiFillCheckCircle } from "react-icons/ai";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();
  const eventId = router.query["event"];
  const games = api.game.getGame.useQuery({ id: String(eventId) });
  const { data } = games;
  const registerUser = api.auth.register.useMutation();
  const userTypes = api.auth.getUserTypes.useQuery();
  const userData = userTypes.data;
  const [selectedOption, setSelectedOption] = useState(null);

  const theme = useTheme();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "#272B52",
    border: "1px solid black",
    boxShadow: 20,
    p: 4,
  };

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  const initialState = {
    name: "",
    npm: "",
    nickname: "",
    contactInfo: "",
    typeId: "",
    registeredGameId: String(eventId),
  };

  const handleFormChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const [form, setForm] = useState(initialState);

  const onSubmit = (event) => {
    event.preventDefault();
    registerUser.mutate({
      name: form.name,
      npm: form.npm,
      nickname: form.nickname,
      contactInfo: form.contactInfo,
      typeId: selectedOption ?? "0",
      registeredGameId: form.registeredGameId,
    });
    handleClose();
    router.push({
      pathname: "/result",
      query:{
        name: form.name,
        npm: form.npm,
        nickname: form.nickname,
        contactInfo: form.contactInfo,
        typeId: selectedOption ?? "0",
        registeredGameId: form.registeredGameId,
        eventId : eventId,
      }
    })
    
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <body>
        <div className="absolute z-40 flex min-h-screen flex-col items-start space-y-5 p-5 pt-28 md:p-28 lg:p-32">
          <h1 className="font-poppinsBold text-3xl text-[#FEB048] md:text-5xl lg:text-6xl">
            Pendaftaran Games Individu
          </h1>
          <h3 className="font-retro text-3xl text-[#F4EFD3]">{data?.name}</h3>
          <div>

          <h4 className="font-poppinsBold text-[#F4EFD3]">
            Biaya pendaftaran : Rp {data?.registerationFee}
          </h4>
          <h2 className="font-poppinsReg text-sm text-[#F4EFD3]">
            Instruksi pembayaran diberikan setelah mengisi form pendaftaran
          </h2>
          </div>
      
          <div className="w-full space-y-3">
            <div className="flex flex-row space-x-3">
              {userData?.map((userType) => (
                <>
                  <input
                    type="radio"
                    name="userType"
                    value={userType.id}
                    checked={selectedOption === userType.id}
                    onChange={handleOptionChange}
                  />
                  <h2 className="text-[#F4EFD3] font-poppinsReg">{userType.name}</h2>
                </>
              ))}
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <label className="text-md text-[#F4EFD3] font-poppinsReg">Nama Lengkap</label>
                <input
                  className="w-full rounded-md border-[3px] border-black bg-[#FBFBFB] p-2 text-sm text-[#7E7E7E] font-poppinsReg"
                  type="text"
                  name="name"
                  placeholder="Perry Perak"
                  onChange={(event) => handleFormChange(event)}
                ></input>
              </div>
              <div>
                <label className="text-md text-[#F4EFD3] font-poppinsReg">Nama Panggilan</label>
                <input
                  className="w-full rounded-md border-[3px] border-black bg-[#FBFBFB] p-2 text-sm text-[#7E7E7E]"
                  type="text"
                  name="nickname"
                  placeholder="Perry"
                  onChange={(event) => handleFormChange(event)}
                ></input>
              </div>
              <div>
                <label className="text-md text-[#F4EFD3]">NPM</label>
                <input
                  className="w-full rounded-md border-[3px] border-black bg-[#FBFBFB] p-2 text-sm text-[#7E7E7E] font-poppinsReg"
                  type="number"
                  name="npm"
                  placeholder="210000000"
                  onChange={(event) => handleFormChange(event)}
                ></input>
              </div>
              <div>
                <label className="text-md text-[#F4EFD3]">
                  ID Line / WhatsApp
                </label>
                <input
                  className="w-full rounded-md border-[3px] border-black bg-[#FBFBFB] p-2 text-sm text-[#7E7E7E] font-poppinsReg"
                  type="text"
                  name="contactInfo"
                  placeholder="perrytheperak"
                  onChange={(event) => handleFormChange(event)}
                ></input>
              </div>
              <button
                disabled={
                  !form.name || !form.npm || !form.nickname || !form.contactInfo
                }
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <div className="flex w-full items-center justify-center space-x-2 rounded-md border-2 border-black bg-[#188C58] p-2 text-white">
                  <FiSend />
                  <div className="font-poppinsReg">Daftar Sekarang</div>
                </div>
              </button>
            </div>
          </div>
          <div>
            <Modal
              open={isModalOpen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex w-full flex-col items-center justify-center space-y-4 pb-3">
                  <AiFillCheckCircle size={45} color="#FEB048" />
                  <h1 className="text-3xl text-[#FEB048] md:text-3xl lg:text-4xl text-center font-poppinsBold">
                    Apakah Anda Yakin Ingin Mendaftar di Permainan Ini?
                  </h1>
                  <h2 className="text-white text-center font-poppinsSemi">
                    Pastikan semua data yang telah anda masukkan tidak ada yang
                    salah. Anda tidak bisa mengubah data setelah pendaftaran
                    tersimpan.
                  </h2>
                  <div className="flex w-full space-x-2">
                    <button
                      className="flex w-full items-center justify-center space-x-2 rounded-md border-2 border-black bg-[#FEB048] p-2 text-[#272B52] font-poppinsSemi"
                      onClick={onSubmit}
                    >
                      Simpan
                    </button>
                    <button
                      className="flex w-full items-center justify-center space-x-2 rounded-md border-2 border-black bg-[#E9DEA6] p-2 text-[#272B52] font-poppinsSemi"
                      onClick={handleClose}
                    >
                      Batal
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        {/* Assets */}
        <div className="relative min-h-screen overflow-hidden bg-[#272B52] lg:block md:block hidden">
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

        <div className="relative min-h-screen overflow-hidden bg-[#272B52] lg:hidden md:hidden block">
       
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
