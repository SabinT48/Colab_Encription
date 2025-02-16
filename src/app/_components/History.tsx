import DateIndicator from "./DateIndicator";
import HistorySearch from "./HistorySearch";
import HystoryItem from "./HystoryItem";

export default function History() {
  const historyItems = [
    "What is Next js? Next js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.",
    "Under the hood, Next js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more.",
    "This allows you to focus on building your application instead of spending time with configuration.",
  ];

  return (
    <div className="fixed top-10 right-0 h-full w-[400px] border-l bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <HistorySearch />
      <div className="mt-3">
        <DateIndicator />
        {historyItems.map((item, index) => (
          <HystoryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
