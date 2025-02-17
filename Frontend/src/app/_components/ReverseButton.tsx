import Image from "next/image";
import reverse from "@/app/_icons/reverse.svg";

interface ReverseButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ReverseButton({ className = '', onClick }: ReverseButtonProps) {
  return (
    <button 
      className={`p-2 ${className} hover:bg-neutral-50`}
      onClick={onClick}
    >
      <Image src={reverse} width={40} height={40} alt="shift_icon" />
    </button>
  );
}
