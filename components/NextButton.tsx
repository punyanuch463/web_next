interface NextButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function NextButton({
    children,
    onClick,
}: NextButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
        love-button
        mt-8
        rounded-full
        bg-[#e8899c]
        px-8
        py-3.5
        text-sm
        font-semibold
        text-white
        shadow-lg
        shadow-pink-200/50
        hover:bg-[#df748d]
      "
        >
            {children}
        </button>
    );
}