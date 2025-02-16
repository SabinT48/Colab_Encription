import Converter from "./_components/Converter";

export default function Home() {
  return (
    <div className="flex items-stretch w-full">
      <div className="w-3/4">
        <Converter />
      </div>
      <div className="w-1/4 border-l py-2 px-4 h-[95vh]">
        History
      </div>
    </div>
  );
}