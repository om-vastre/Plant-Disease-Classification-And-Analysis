import { useEffect, useState } from "react";
import Info from "./mainContentInfo";
import GraphLoader from "./graphloader";
import DynamicTable from "./tableRender";
import dataFromJson from "../data.json";
import searchIcon from "../assets/search-icon.png";
import Webcam from "react-webcam";
// const linksCss = "w-80 flex justify-center text-lg text-tabs-two p-2 font-semibold hover:bg-tabs-bg rounded-md  hover:text-primary-one mx-3";
// const linksCssCurrent = "w-80 flex justify-center text-lg  p-2 font-semibold bg-white rounded-md text-primary-one mx-3";
const linksCss =
  "w-80 flex justify-center text-lg text-tabs-text p-2 font-semibold hover:bg-tabs-hover hover:text-tabs-hover-text rounded-md mx-3";
const linksCssCurrent =
  "w-80 flex justify-center text-lg text-tabs-curr-text p-2 font-semibold bg-tabs-curr-bg rounded-md text-tabs-primary  mx-3";
const titlesCss = " mt-10 ml-10 text-3xl font-semibold text-main-title";

export default function MainContent(props) {
  const disease = props.diseasename;
  const redirectLink = "https://www.google.com/search?q=" + disease;
  const data = dataFromJson;
  const [currentComponent, setCurrentComponent] = useState("information");
  const [title, setTitle] = useState("Title of Disorder");
  const [description, setDescription] = useState("");
  const [pesticides, setPesticides] = useState([]);
  const [image1Url, setImage1Url] = useState([]);
  const [image2Url, setImage2Url] = useState([]);
  const [image3Url, setImage3Url] = useState([]);
  const [currObject, setCurrentObject] = useState([]);
  const [graphsData, setGraphsData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const fetchInfo = async () => {
    const resdata = props.diseasename;
    setCurrentObject(data[resdata]);
    setTitle(resdata);
    const tempDescription = currObject.Information.Description;
    setDescription(tempDescription);
    setImage1Url(currObject.Information.img1);
    setImage2Url(currObject.Information.img2);
    setImage3Url(currObject.Information.img3);
    setPesticides(currObject.Information.Pesticides);
    setGraphsData(currObject.Graphs);
    setTableData(currObject.Table);
    console.log(currentComponent);
    console.log(image1Url);
  };
  useEffect(() => {
    fetchInfo();
  });
  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="flex justify-start">
          <p className=" mt-10 ml-10  text-4xl font-semibold text-main-title">
            {title}
          </p>
        </div>

        <div className=" mt-8 pl-10 pr-16 flex  w-full px-10">
          <div className="my-2 flex justify-between w-full ">
            {currentComponent != "information" && (
              <button
                className={linksCss}
                onClick={() => {
                  setCurrentComponent("information");
                }}
              >
                INFORMATION
              </button>
            )}
            {currentComponent == "information" && (
              <button
                className={linksCssCurrent}
                onClick={() => {
                  setCurrentComponent("information");
                }}
              >
                INFORMATION
              </button>
            )}
            {currentComponent != "graphs" && (
              <button
                className={linksCss}
                onClick={() => {
                  setCurrentComponent("graphs");
                }}
              >
                GRAPHS
              </button>
            )}
            {currentComponent == "graphs" && (
              <button
                className={linksCssCurrent}
                onClick={() => {
                  setCurrentComponent("graphs");
                }}
              >
                GRAPHS
              </button>
            )}
            {currentComponent != "table" && (
              <button
                className={linksCss}
                onClick={() => {
                  setCurrentComponent("table");
                }}
              >
                TABLE
              </button>
            )}
            {currentComponent == "table" && (
              <button
                className={linksCssCurrent}
                onClick={() => {
                  setCurrentComponent("table");
                }}
              >
                TABLE
              </button>
            )}
          </div>
        </div>
        {currentComponent == "information" && (
          <div>
            <Info
              description={description}
              img1url={image1Url}
              img2url={image2Url}
              img3url={image3Url}
              pesticides={pesticides}
            ></Info>
          </div>
        )}
        {currentComponent == "graphs" && (
          <div id="graphs" className="w-full">
            <GraphLoader graphsData={graphsData}></GraphLoader>
          </div>
        )}
        {currentComponent == "table" && (
          <div id="table" className="w-full ">
            <p className={titlesCss}>Table of Data</p>
            <div className="flex flex-col items-center justify-center">
              <DynamicTable data={tableData}></DynamicTable>
              <div className="p-20 flex">
                <a
                  href={redirectLink}
                  className=" flex justify-between items-center bg-search-bg rounded-full py-3 pr-8 pl-5 text-xl font-medium  text-white hover:bg-search-bg-hover"
                >
                  <img
                    className="h-10 mr-3 aspect-square "
                    src={searchIcon}
                    alt="search-icon"
                  ></img>
                  Search on google{" "}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
