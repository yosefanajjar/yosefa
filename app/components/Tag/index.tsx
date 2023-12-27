interface TagProps {
    children: React.ReactNode;
    variant: 'filled' | 'outlined';
    size?: 'regular' | 'large';
    className?: string;
}

export const Tag = ({ children, variant, size = 'regular', className }: TagProps) => {
    const variantClasses = variant === 'outlined' ? ' bg-transparent' : 'bg-white';
    const sizeClasses = size === 'large' ? 'w-full h-[100px] rounded-2xl border-4' : 'min-w-[77px] h-[26px] mt-4 ml-4 rounded-[5px] border border-black'

    return (
        <div className={`${sizeClasses} ${variantClasses}  md:px-5 flex items-center justify-center relative ${className}`}>
            <p className={`text-center ${size === 'large' ? 'text-3xl xl:text-4xl' : 'text-xs'} font-primary`}>{children}</p>
            {size === 'large' ? (
                <div className="w-full h-[98.16px] absolute top-3 left-1 bg-black rounded-2xl border border-black -z-10" />
            ) : null}
        </div>
    )
}
