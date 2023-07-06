import { FC, Dispatch, SetStateAction } from "react"
import Image from "next/image"
import { Button } from "../ui/button"

interface ILoginModal {
  setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>
}

export const LoginModal: FC<ILoginModal> = ({ setIsLoginModalOpen }) => {
  return (
    <>
      <div className="w-full h-full bg-[#00000095] fixed top-0 left-0 z-20" onClick={() => setIsLoginModalOpen(old => !old)}>
      </div>
      <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-30">
        <div className="w-[350px] lg:w-[450px] h-80 bg-white rounded px-4">
          <div className="flex justify-between items-center p-3">
            <p className="text-xl font-medium">Se connecter</p>
            <button>
              <Image src={'/svg/close.svg'} alt="close" width={25} height={25} onClick={() => setIsLoginModalOpen(old => !old)} />
            </button>
          </div>
          <hr />
          <div className="flex flex-col gap-2 my-2 mt-5">
            <label htmlFor="mail">Adresse e-mail*</label>
            <input type="text" name="mail" className="border border-gray-300 py-2 px-4" />
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label htmlFor="password">Mot de passe*</label>
            <input type="password" name="password" className="border border-gray-300 py-2 px-4" />
          </div>
          <p className="text-xs text-gray-500 mb-1">*Champs obligatoires</p>
          <Button text="Connexion" size="normal" className="mt-2" />
        </div>
      </div>
    </>
  )
}