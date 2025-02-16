export default function HystoryItem({ item }: { item: string }) {
  const formatedString = item.length > 47 ? item.slice(0, 47) + "..." : item;
  return (
    <div className="p-2 hover:bg-gray-100 rounded cursor-pointer">
      <h1>{formatedString}</h1>
    </div>
  );
}
