import Link from "next/link";
import type { HTMLAttributeAnchorTarget } from "react";

interface ButtonProps {
    children: string;
    variant: 'primary' | 'secondary';
    className?: string;
    fullWidth?: boolean;
    onClick?: () => void;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
}

export const Button = ({ children, variant, className, fullWidth = false, onClick, href, target = '_self' }: ButtonProps) => {
    const variantClasses = variant === 'primary' ? 'bg-purple-primary border-black dark:border-white text-white' : 'bg-white text-black';
    const fullWidthClasses = fullWidth ? 'w-full' : 'w-full md:w-[250.51px]';

    return (
        <div className={`${fullWidthClasses} relative z-30 group`}>
            {href !== undefined ? (
                <Link className={`relative flex justify-center items-center ${fullWidthClasses} h-[72px] border-4 button-text ${variantClasses} ${className}`} href={href} target={target}>
                    {children}
                </Link>
            ) : (
                <button className={`relative block ${fullWidthClasses} h-[72px] border-4 button-text ${variantClasses} ${className}`} onClick={onClick}>
                    {children}
                </button>
            )}
            <div className={`w-full h-full bg-black ${variant === 'primary' ? 'dark:bg-white' : ''} absolute right-0 bottom-0 top-2 left-3 -z-10 group-hover:left-2 group-hover:top-1 group-hover:transition-all delay-50 duration-300`}></div>
        </div>
    )
}
