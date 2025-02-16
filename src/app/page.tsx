import Converter from "./_components/Converter";
import History from "./_components/History";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-10">
        <Converter />
      </div>
      <div className="w-full md:w-[400px]">
        <History />
      </div>
    </div>
  );
}