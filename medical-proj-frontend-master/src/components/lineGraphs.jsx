import { Button } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
export default function LineGraph(props) {
  const titlesCss = " mt-10 mb-5 ml-10 text-3xl font-semibold text-main-title";
  return (
    <div className=" mt-10 w-full flex flex-col justify-between items-center">
      <div className="flex justify-start w-full">
        <p className={titlesCss}>{props.title}</p>
      </div>
      <LineChart
        xAxis={[{ data: props.xAxis }]}
        series={[
          {
            data: props.values,
            label: "No of infected plants",
            color: "#222021",
          },
        ]}
        width={1000}
        height={500}
      />
    </div>
  );
}
