import Converter from "./_components/Converter";
import History from "./_components/History";

export default function Home() {
  return (
    <>
      <div className="p-10 md:mr-[300px]">
        <Converter />
      </div>
      <History />
    </>
  );
}