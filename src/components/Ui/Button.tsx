import { ReactNode } from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    width?: 'w-full' | 'w-fit', 
}


const Button = ({children , width = "w-full",className, ...rest}:IProps) => {
  return (
    <button className={`${className} ${width} w-full rounded-md text-white p-2`} {...rest}>{children}</button>
  )
}

export default Button;