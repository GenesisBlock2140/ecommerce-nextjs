import { FC } from "react"

interface ICartTotal {
  total: number
}

export const CartTotal: FC<ICartTotal> = ({total}) => {
  return (
    <div className="mt-4">
      <hr />
      <p className="font-medium text-lg mt-2">
        {`Total : ${total} €`}
      </p>
    </div>
  )
}