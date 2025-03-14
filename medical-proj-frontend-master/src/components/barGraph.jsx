import { BarChart } from "@mui/x-charts/BarChart";
export default function BarGraph(props) {
  const titlesCss = " mt-10 mb-5 ml-10 text-3xl font-semibold text-main-title";
  const xAxis = props.xAxis;
  const values = props.values;
  return (
    <div className=" mt-10 w-full flex flex-col justify-between items-center">
      <div className="flex justify-start w-full">
        <p className={titlesCss}>{props.title}</p>
      </div>
      <BarChart
        xAxis={[{ scaleType: "band", data: xAxis }]}
        series={[{ data: values, color: "#31363F" }]}
        width={1000}
        height={500}
      />
    </div>
  );
}
