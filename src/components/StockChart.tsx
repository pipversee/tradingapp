import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataPoint {
  x: number;
  y: number;
}

const generatePath = (points: DataPoint[], width: number, height: number): string => {
  if (points.length < 2) return "";

  const xScale = width / (points.length - 1);
  const minY = Math.min(...points.map(p => p.y));
  const maxY = Math.max(...points.map(p => p.y));
  const yRange = maxY - minY || 1;

  const scaledPoints = points.map((p, i) => ({
    x: i * xScale,
    y: height - ((p.y - minY) / yRange) * height * 0.8 - height * 0.1
  }));

  let path = `M ${scaledPoints[0].x} ${scaledPoints[0].y}`;

  for (let i = 1; i < scaledPoints.length; i++) {
    const prev = scaledPoints[i - 1];
    const curr = scaledPoints[i];
    const cp1x = prev.x + (curr.x - prev.x) / 3;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) * 2 / 3;
    const cp2y = curr.y;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }

  return path;
};

const StockChart = () => {
  const [points, setPoints] = useState<DataPoint[]>([]);
  const width = 600;
  const height = 300;

  useEffect(() => {
    // Generate initial data
    const initialPoints: DataPoint[] = [];
    let value = 100;
    for (let i = 0; i < 50; i++) {
      value += (Math.random() - 0.45) * 8;
      value = Math.max(50, Math.min(150, value));
      initialPoints.push({ x: i, y: value });
    }
    setPoints(initialPoints);

    // Animate with new points
    const interval = setInterval(() => {
      setPoints(prev => {
        const newPoints = [...prev.slice(1)];
        const lastValue = newPoints[newPoints.length - 1]?.y || 100;
        let newValue = lastValue + (Math.random() - 0.45) * 8;
        newValue = Math.max(50, Math.min(150, newValue));
        newPoints.push({ x: prev.length, y: newValue });
        return newPoints;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const path = generatePath(points, width, height);
  const isPositive = points.length > 1 && points[points.length - 1].y > points[0].y;

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-3xl opacity-30">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          <path
            d={path}
            fill="none"
            stroke={isPositive ? "hsl(160, 84%, 39%)" : "hsl(0, 72%, 51%)"}
            strokeWidth="20"
          />
        </svg>
      </div>

      {/* Main chart */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto relative z-10">
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={height * (i + 1) / 6}
            x2={width}
            y2={height * (i + 1) / 6}
            stroke="hsl(217, 33%, 17%)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}

        {/* Gradient fill */}
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isPositive ? "hsl(160, 84%, 39%)" : "hsl(0, 72%, 51%)"} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isPositive ? "hsl(160, 84%, 39%)" : "hsl(0, 72%, 51%)"} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Fill area */}
        <motion.path
          d={`${path} L ${width} ${height} L 0 ${height} Z`}
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Main line */}
        <motion.path
          d={path}
          fill="none"
          stroke={isPositive ? "hsl(160, 84%, 39%)" : "hsl(0, 72%, 51%)"}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Data points */}
        {points.slice(-5).map((point, i) => {
          const xScale = width / (points.length - 1);
          const minY = Math.min(...points.map(p => p.y));
          const maxY = Math.max(...points.map(p => p.y));
          const yRange = maxY - minY || 1;
          const x = (points.length - 5 + i) * xScale;
          const y = height - ((point.y - minY) / yRange) * height * 0.8 - height * 0.1;

          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              fill={isPositive ? "hsl(160, 84%, 39%)" : "hsl(0, 72%, 51%)"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: i === 4 ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {i === 4 && (
                <animate
                  attributeName="r"
                  values="4;8;4"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              )}
            </motion.circle>
          );
        })}
      </svg>
    </div>
  );
};

export default StockChart;