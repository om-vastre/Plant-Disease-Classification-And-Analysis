import React from "react";
import { useState } from "react";
import camera from "../assets/camera-solid.png";
import WebcamCapture from "./webcam";
export default function SideBar(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const onClickUploadImage = async () => {
    const fn = props.changeDiseaseState;
    selectedFile;
    if (!selectedFile) {
      alert("Please select an image");
      return;
    }
    const fd = new FormData();
    const filetoupload = selectedFile;
    fd.append("file", selectedFile);
    console.log(fd.get("file"));
    console.log([...fd]);
    console.log(selectedFile);
    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { Accept: "*/*" },
      body: fd,
    });
    // console.log(res);

    const resdata = await res.json();
    // console.log(resdata);
    const tempRes = resdata.message.split("_");
    if (tempRes[tempRes.length - 1] == "healthy") {
      // console.log(tempRes[tempRes.length - 1]);
      fn("healthy");
    } else {
      fn(resdata.message);
    }
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image")) {
      alert("Please select an image");
      return;
    }
    setSelectedFile(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="top-0 bg-primary-one sticky min-h-dvh min-w-96 flex flex-col items-center">
      <div className=" mt-5 ml-5 mr-32  flex items-center justify-center  mb-10 text-sidebar-text text-4xl font-bold">
        Team Name
      </div>

      <div className="m-6 border-2 flex justify-center items-center border-primary-two rounded-md p-2 w-80 min-h-80">
        {!selectedFile && (
          <div className=" text-sidebar-text flex h-80 justify-center items-center">
            <p>No image selected</p>
          </div>
        )}
        {imagePreview && <img src={imagePreview} alt="selected" />}
      </div>

      <label
        htmlFor="imageInput"
        className="bg-sidebar-button text-lg text-sidebar-button-text p-2 rounded-md hover:bg-sidebar-button-hover w-fit"
      >
        Choose Image
      </label>
      <input
        id="imageInput"
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={onClickUploadImage}
        className=" m-4 bg-sidebar-button text-lg text-sidebar-button-text p-2 rounded-md hover:bg-sidebar-button-hover w-fit"
      >
        Upload Image
      </button>
      <div className="h-20 w-full bg-blue flex items-center justify-center">
        <WebcamCapture
          changePreviewImage={setImagePreview}
          changeSelectedFile={setSelectedFile}
        ></WebcamCapture>
      </div>
    </div>
  );
}
