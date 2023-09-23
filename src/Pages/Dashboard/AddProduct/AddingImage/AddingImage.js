import React from "react";
import UploadImage from "../../../../hooks/UploadImage";

const AddingImage = ({
  whiteImage,
  redImage,
  blueImage,
  yellowImage,
  greenImage,
  setWhiteImage,
  setRedImage,
  setBlueImage,
  setYellowImage,
  setGreenImage,
}) => {
  const { uploadImage } = UploadImage();
  const colors = [
    {
      name: "white",
      setImage: setWhiteImage,
      image: whiteImage,
      textColor: "text-gray-300",
      required: true,
    },
    {
      name: "red",
      setImage: setRedImage,
      image: redImage,
      textColor: "text-red-500",
    },
    {
      name: "blue",
      setImage: setBlueImage,
      image: blueImage,
      textColor: "text-blue-500",
    },
    {
      name: "yellow",
      setImage: setYellowImage,
      image: yellowImage,
      textColor: "text-yellow-400",
    },
    {
      name: "green",
      setImage: setGreenImage,
      image: greenImage,
      textColor: "text-green-500",
    },
  ];
  return (
    <>
      <div className="py-5 flex justify-between space-x-3 md:space-x-7">
        {colors.map((color) => {
          return (
            <div
              className={`p-1 border-2 rounded-full relative border-${color.name}-400 ${color.textColor}`}
              key={color.name}
            >
              <div
                className={`${
                  color.image ? "absolute" : "hidden"
                } text-xs w-4 h-4 flex items-center justify-center top-0 right-0 -mt-1 -mr-1 bg-gray-700 rounded-full overflow-hidden z-50 cursor-pointer`}
                onClick={() => {
                  color.setImage("");
                }}
              >
                <i className="fas fa-times text-white"></i>
              </div>
              <div
                className={`${
                  !color.image && " cursor-pointer"
                } w-6 h-6 md:w-10 md:h-10 flex items-center justify-center bg-white border rounded-full text-2xl overflow-hidden`}
                onClick={() => {
                  if (!color.image) {
                    document.getElementById(color.name).click();
                  }
                }}
              >
                {color.image ? (
                  <img src={color.image} alt="IMG" />
                ) : (
                  <i className="fas fa-plus"></i>
                )}

                <input
                  type="file"
                  name={color.name}
                  id={color.name}
                  className="hidden"
                  required={color.required}
                  onChange={(e) => {
                    uploadImage(e.target.files[0], color.setImage);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddingImage;
