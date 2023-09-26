import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const COLORS = ["#0088FE", "#FF8042"];

const PieChartt = ({ item }) => {
  const data = item;
  const remaining = 12 - item;
  const chartData = [
    { name: "Donated", value: item },
    { name: "Remaining", value: remaining },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
            }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex-wrap gap-2 lg:flex gap-10 align-middle  justify-center ">
        <div className="flex justify-center align-middle items-center gap-2">
          <p className=" text-xl font-bold">Total Donation : </p>
          <div
            className="bg-orange-600
                 text-orange-600  px-2 w-12 h-3"
          ></div>
        </div>
        <div className="flex  justify-center align-middle items-center gap-2">
          <p className="text-xl font-bold">Your Donation : </p>{" "}
          <div
            className="bg-blue-600
                text-blue-600 w-12 h-3"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PieChartt;
