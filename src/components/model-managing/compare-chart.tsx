import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Model } from "@/types";
import { useMemo } from "react";
import { Bar, BarChart, XAxis } from "recharts";

const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

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
      (acc, { name }) => {
        acc[name] = {
          label: name,
          color: getRandomColor(),
        };
        return acc;
      },
      {} as { [key: string]: { label: string; color: string } }
    );
  }, [models]);

  const chartData = useMemo(() => convertToChartData(models), [models]);

  return (
    <ChartContainer config={chartConfig} className="h-[340px] w-full">
      <BarChart barSize={15} barGap={10} accessibilityLayer data={chartData}>
        <XAxis
          dataKey="type"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tick={<CustomTick />}
        />
        <ChartLegend content={<ChartLegendContent />} />
        {models.map((model) => (
          <Bar dataKey={model.name} fill={`var(--color-${model.name})`} />
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default CompareChart;
