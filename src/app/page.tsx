import Converter from "./_components/Converter";
import History from "./_components/History";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-0 min-h-screen">
      <div className="flex-1">
        <Converter />
      </div>
      <div className="w-full md:max-w-96 md:mr-4">
        <History />
      </div>
    </div>
  );
}