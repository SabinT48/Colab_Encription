import HistorySearch from "./HistorySearch";

export default function History() {
  const historyItems = [
    "Item 1", "Item 2", "Item 3",
  ];

  return (
    <div className="fixed top-10 right-0 h-full w-[400px] border-l bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <HistorySearch />
      <div className="mt-3">
        {historyItems.map((item, index) => (
          <div key={index} className="p-2 ">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
