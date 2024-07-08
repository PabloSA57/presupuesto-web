
interface Props {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary',
    className?: string
}

const StyleButtonVariant = {
    primary: "bg-red-500 border border-red-500  text-white hover:bg-white hover:text-red-500",
    secondary: "bg-neutral-950 border border-neutral-950 text-white",
    tertiary: "bg-white border border-white text-neutral-950 shadow-md",
}

const Button = ({ children, variant="primary", className="" }: Props) => {

    const classes = StyleButtonVariant[variant]

    return (
        <button className={`text-sm font-medium h-[40px] ${classes} ${className}  px-3 grid place-content-center md:px-3 lg:font-semibold rounded-md`}>
            {children}
        </button>
    )
}

export default Button