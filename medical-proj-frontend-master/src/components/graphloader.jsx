import BarGraph from "./barGraph";
import LineGraph from "./lineGraphs";
export default function GraphLoader(props) {
  const historyChart = props.graphsData["HistoryChart"];
  const monthlyChart = props.graphsData["MonthsChart"];
  const allPesticidesChart = props.graphsData["PesticidesBarPlot"];
  return (
    <div>
      <LineGraph
        title={"History Chart "}
        xAxis={historyChart["xaxis"]}
        values={historyChart["data"]}
      ></LineGraph>
      <BarGraph
        title={"Month wise chart"}
        xAxis={monthlyChart["xaxis"]}
        values={monthlyChart["data"]}
      ></BarGraph>
      {Object.entries(allPesticidesChart).map(([key, value], index) => (
        <BarGraph
          key={index}
          xAxis={value.xaxis}
          values={value.data}
          title={key}
        />
      ))}
    </div>
  );
}
