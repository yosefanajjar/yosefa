interface ImageFrameProps {
    children: React.ReactNode;
    variant: 'portrait' | 'landscape';
    className?: string;
};

export const ImageFrame = ({ children, variant, className }: ImageFrameProps) => (
    <div className={`w-full ${variant === 'portrait' ? 'h-[398.79px]' : 'h-[218px]'}  border-4 border-black dark:border-white relative z-30 ${className}`}>
        {children}
        <div className={`w-full h-full bg-black dark:bg-white absolute right-0 bottom-0 top-3 left-4 -z-10`}></div>
    </div>
)
