import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import camera from "../assets/camera-solid.png";

const WebcamCapture = (props) => {
  const setImagePreview = props.changePreviewImage;
  const setSelectedFile = props.changeSelectedFile;
  const webcamRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImagePreview(imageSrc);
    const blob = await fetch(imageSrc).then((res) => res.blob());
    const file = new File([blob], "captured-image.jpeg", {
      type: "image/jpeg",
    });
    setSelectedFile(file);
    closeModal();
  };
  return (
    <div>
      <img
        className="h-20 w-20 bg-cam-button pr-1 hover:scale-110 hover:bg-white rounded-xl"
        src={camera}
        onClick={openModal}
        alt="Capture"
      />
      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-webcam-back bg-opacity-75 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="modal-content bg-modal-back p-8 rounded-lg relative border border-black">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 text-black hover:text-red-500 focus:outline-none "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <h2 className="mb-4 text-xl">Capture Image</h2>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                facingMode: "user",
                aspectRatio: 1,
              }}
              className="mb-4"
            />
            <button
              onClick={capture}
              className="m-4 bg-sidebar-button text-lg text-sidebar-button-text p-2 rounded-md hover:bg-sidebar-button-hover w-fit"
            >
              Click Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
