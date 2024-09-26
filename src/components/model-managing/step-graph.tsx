import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

interface StepGraphProps {
  title: string;
  data: { x: number; y: number }[];
}

const StepGraph = ({ title, data }: StepGraphProps) => {
  return (
    <div className="flex-1 py-5 rounded-[10px] bg-white border border-[#EDF1FE]">
      <h2 className="text-center font-bold">{title}</h2>
      <ResponsiveContainer width="100%" height={190} className="my-6">
        <LineChart data={data} margin={{ right: 40, left: 40, top: 10 }}>
          <CartesianGrid stroke="#C1C1C1" vertical={false} />
          <XAxis
            dataKey="x"
            type="number"
            ticks={[0, 2500, 5000]}
            domain={[0, 5000]}
            tickFormatter={(tick) => tick.toLocaleString()}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6E88D9", dy: 10 }}
          />
          <YAxis
            type="number"
            domain={[2e-6, 10e-6]}
            tickFormatter={(tick) => tick.toExponential(2)}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6E88D9", dx: -20 }}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#601FF9"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <h3 className="text-center font-bold text-sm">Steps</h3>
    </div>
  );
};

export default StepGraph;
