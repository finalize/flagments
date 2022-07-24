import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-[minmax(80px,240px)_minmax(720px,_1fr)]">
      <div className="flex items-center justify-center border-r">nav</div>
      {children}
    </div>
  )
}
