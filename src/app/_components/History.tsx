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
    <div className="w-full border-l bg-white p-4 overflow-y-auto h-full">
      <h2 className="text-lg font-semibold mb-2">History</h2>
      <HistorySearch />
      <div className="mt-2">
        <DateIndicator />
        {historyItems.map((item, index) => (
          <HystoryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
