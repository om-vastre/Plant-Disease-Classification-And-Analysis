import { AppBar } from "@mui/material";
import "./App.css";
import MainContent from "./components/mainContent";
import SideBar from "./components/sidebar";
import uploadPath from "./assets/ImgUp.svg";
import plantPath from "./assets/Plant.svg";
import notfoundPath from "./assets/not-found.png";
import { useEffect, useState } from "react";

function App() {
  const [disease, setDisease] = useState("");
  const handleDiseaseState = (value) => {
    setDisease(value);
  };
  useEffect(() => {});
  return (
    <div className="bg-primary-two  min-h-screen flex flex-row items-start ">
      <div className="min-w-96 sticky top-0">
        <SideBar changeDiseaseState={handleDiseaseState}></SideBar>
      </div>
      {disease === "" && (
        <div className="h-screen  w-full flex flex-col items-center justify-center text-3xl font-bold text-uploadimg-text ">
          <img
            className="aspect-square rounded-md h-48  "
            src={uploadPath}
            alt=""
          ></img>
          <p className=" p-10  rounded-md mb-32">Please Upload an Image</p>
        </div>
      )}
      {disease == "healthy" && (
        <div className="h-screen  w-full flex flex-col items-center justify-center text-3xl font-bold text-planthealthy-text ">
          <img
            className="aspect-square rounded-md h-48 "
            src={plantPath}
            alt=""
          ></img>
          <p className=" p-10 rounded-md mb-32">Plant is healthy</p>
        </div>
      )}
      {disease.length!=0 && disease !== "healthy" && disease !== "Not Found" && (
        <div className="w-full">
          <div className="sticky top-0"></div>
          <MainContent diseasename={disease}></MainContent>
        </div>
      )}
      {disease == "Not Found" && (
        <div className="h-screen  w-full flex flex-col items-center justify-center text-6xl font-bold text-notfound-text ">
          <img
            className="aspect-square rounded-md h-48 "
            src={notfoundPath}
            alt=""
          ></img>
          <p className=" p-10 rounded-md mb-32">Disease Not Found</p>
        </div>
      )}
    </div>
  );
}

export default App;
