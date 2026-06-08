

interface ButtonProps {
    children: string;
    className?: string;
}


const Button = ({children,className}: ButtonProps) => {
    return ( <div
    className={`bg-danger rounded-md px-3 cursor-pointer text-center hover:bg-red-500 hover:text-white ${className || ''}`}
    >
    {children}</div> 
    );

}

export default Button;