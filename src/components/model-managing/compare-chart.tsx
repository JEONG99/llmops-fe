import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Model } from "@/types";
import { useMemo } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

/*const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};*/

const convertToChartData = (models: Model[]) => {
  const metrics = ["bleu", "rouge_1", "rouge_2", "rouge_l"];
  const chartData = metrics.map((metric) => {
    const dataPoint: any = { type: metric };
    models.forEach((model) => {
      dataPoint[model.name] = model[metric as keyof Model];
    });
    return dataPoint;
  });
  return chartData;
};

const CustomTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={-10}
        dy={16}
        fontSize={16}
        textAnchor="middle"
        fontWeight={700}
      >
        {payload.value}
      </text>
    </g>
  );
};

const CompareChart = ({ models }: { models: Model[] }) => {
  const chartConfig: ChartConfig = useMemo(() => {
    return models.reduce(
      (acc, { name }, index) => {
        acc[name] = {
          label: name,
          color:
            index % 3 === 0
              ? "#D3FF8D"
              : index % 3 === 1
                ? "#FF90D8"
                : "#6E88D9",
        };
        return acc;
      },
      {} as { [key: string]: { label: string; color: string } }
    );
  }, [models]);

  const chartData = useMemo(() => convertToChartData(models), [models]);

  return (
    <div className="w-full">
      <div className="flex items-center h-[220px] w-full">
        {chartData.map((data) => (
          <ChartContainer
            config={chartConfig}
            className="flex-1 h-full aspect-auto"
          >
            <BarChart
              barSize={15}
              barGap={10}
              margin={{ right: 50 }}
              accessibilityLayer
              data={[data]}
            >
              <XAxis
                dataKey="type"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={<CustomTick />}
              />
              <YAxis
                domain={[0.8, 1]}
                axisLine={false}
                tickLine={false}
                width={40}
              />
              {
                <ChartLegend
                  content={<ChartLegendContent />}
                  className="hidden"
                />
              }
              {models.map((model) => (
                <Bar dataKey={model.name} fill={`var(--color-${model.name})`} />
              ))}
            </BarChart>
          </ChartContainer>
        ))}
      </div>
      <div className="mt-5 ml-3 flex flex-wrap gap-x-8 gap-y-4 w-full">
        {models.map((model) => (
          <div className="flex gap-5 items-center w-1/5 text-center">
            <div
              className={cn("size-4 rounded-[2px] border border-[#6E88D9]")}
              style={{ backgroundColor: chartConfig[model.name].color }}
            />
            <span>{model.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareChart;
