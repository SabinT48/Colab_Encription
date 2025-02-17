import Converter from "./_components/Converter";
import History from "./_components/History";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr,minmax(350px,30%)] min-h-screen">
      <div className="relative">
        <Converter />
      </div>
      <div>
        <History />
      </div>
    </div>
  );
}