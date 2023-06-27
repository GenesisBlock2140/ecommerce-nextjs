import { FC } from "react";
import clsx from "clsx";

interface IShell {
  children: React.ReactNode
  className?: string
}

export const Shell: FC<IShell> = ({ children, className }) => {

  const style = "max-w-[1200px] mx-auto";

  return (
    <div className={clsx([style, className && className])}>
      {children}
    </div>
  )
}