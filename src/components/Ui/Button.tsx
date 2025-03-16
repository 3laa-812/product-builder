import { ReactNode } from "react";

interface IProps{
    children: ReactNode,
    className?: string,
}


const Button = ({children ,className}:IProps) => {
  return (
    <button className={`${className} w-full rounded-md text-white p-2`}>{children}</button>
  )
}

export default Button;