
const Text = ({ children, className }: { children: string; className?: string }) => {
     return (
            <p className={`text-3xl leading-normal tracking-wides ${className || 'text-justify'}`}>
                {children}
            </p>
        )
}
 
export default Text;