type StockPillProps =  {
  symbol: string;
  value: string;
}

function StockPill({ symbol, value }: StockPillProps) {
  const positive = value.startsWith("+");

  return (
    <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-sm text-white">
      <span className="font-medium">{symbol}</span>
      <span
        className={`font-semibold ${
          positive ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default StockPill