export const CloseIcon = ({ fill }: { fill: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
        >
            <path
                fill={fill}
                d="M24.533 23.075L9.353 7.895a1.267 1.267 0 00-1.79 0l-.095.095a1.267 1.267 0 000 1.791l15.18 15.18a1.267 1.267 0 001.79 0l.095-.095a1.267 1.267 0 000-1.791z"
            ></path>
            <path
                fill={fill}
                d="M22.647 7.925l-15.18 15.18a1.267 1.267 0 000 1.79l.095.095a1.267 1.267 0 001.792 0L24.533 9.81a1.267 1.267 0 000-1.79l-.095-.095a1.267 1.267 0 00-1.79 0z"
            ></path>
        </svg>
    );
}
