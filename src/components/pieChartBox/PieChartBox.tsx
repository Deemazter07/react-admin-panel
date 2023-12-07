import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Group A", value: 400, color: "#0088FE" },
  { name: "Group B", value: 300, color: "#00C49F" },
  { name: "Group C", value: 300, color: "#FFBB28" },
  { name: "Group D", value: 200, color: "#FF8042" },
];

function PieChartBox() {
  return (
    <div className="pieChartBox">
      <h1>Leads By Source</h1>
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={800} height={400}>
            <Tooltip
              contentStyle={{ backgroundColor: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map(({ color }, index) => (
                <Cell key={`cell-${index}`} fill={color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="options">
        {data.map((item, index) => (
          <div className="option" key={index}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
