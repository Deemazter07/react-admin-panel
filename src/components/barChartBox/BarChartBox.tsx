import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

function BarChartBox({ title, color, dataKey, chartData }: Props) {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a3447",
                borderRadius: "5px",
              }}
              cursor={{ fill: "none" }}
              labelStyle={{ display: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
