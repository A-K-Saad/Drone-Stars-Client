import React from "react";

const Shots = () => {
  return (
    <>
      <div className="my-10 px-2 md:px-14 lg:px-32">
        <h1 className="text-3xl">Featured Shots</h1>
        <div className="underline mt-1 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <iframe
            src="https://www.youtube.com/embed/5lWkZ-JaEOc?si=KtAbY1GPutJZ0cbN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-44 md:h-72 rounded"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/BapSQFJPMM0?si=f5PxMQELcrYOlBc2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-44 md:h-72 rounded"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/R_InO9bxuwU?si=1klp4I5XSmc0htO9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-44 md:h-72 rounded"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/TiXOQn7z9Hg?si=GrBPM2RTr6qdzeYH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-44 md:h-72 rounded"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Shots;
