import { FC } from "react";

interface IBillboard {
  text: string
}

export const Billboard: FC<IBillboard> = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-full h-80 rounded-lg my-10 p-5 bg-[url('/bg-chaise-cat.jpg')]">
      <p className="text-2xl lg:text-3xl font-semibold text-white text-center">
        {text}
      </p>
    </div>
  )
}