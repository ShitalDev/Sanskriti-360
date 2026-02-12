import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const radarData = Object.entries(practice.cai.indicators).map(
  ([key, value]) => ({
    subject: key,
    score: value
  })
);
<LineChart
  width={400}
  height={300}
  data={practice.cai.trend}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="year" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="score" stroke="#1565c0" />
</LineChart>
