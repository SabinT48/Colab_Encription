import Image from "next/image";
import reverse from "@/app/_icons/reverse.svg";

interface ReverseButtonProps {
  className?: string;
}

export default function ReverseButton({ className = '' }: ReverseButtonProps) {
  return (
    <button className={`p-2 ${className} hover:bg-neutral-50`}>
      <Image src={reverse} width={40} height={40} alt="shift_icon" />
    </button>
  );
}
