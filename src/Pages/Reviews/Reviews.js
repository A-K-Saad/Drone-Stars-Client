import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      {reviews.length >= 1 && (
        <div className="mb-10 mt-20 px-3 md:px-32">
          <div className="text-center text-3xl mb-8">What users say</div>
          <div className="grid grid-cols-2 gap-5">
            {reviews?.map((review) => {
              const ratingElements = [];
              const unRatedElements = [];
              for (let i = 0; i < review.rating; i++) {
                ratingElements.push(
                  <i className="fas fa-star text-yellow-500"></i>
                );
              }
              for (let i = 0; i < 5 - review.rating; i++) {
                unRatedElements.push(
                  <i className="far fa-star text-gray-500"></i>
                );
              }
              return (
                <div
                  key={review._id}
                  className="items-center bg-white rounded shadow-sm px-5 py-4 text-gray-600"
                >
                  <div className="flex">
                    <div className="rounded-full w-16 h-16 border border-gray-300 overflow-hidden mr-3">
                      <img
                        src={review.avatar}
                        onError={(e) =>
                          (e.target.src = "https://i.ibb.co/qgbdqZ3/male.png")
                        }
                        alt={review.name}
                        className="max-w-none h-full bg-white"
                      />
                    </div>
                    <div className="text-left">
                      <p>{review.name}</p>
                      <p>{review.email}</p>
                      {ratingElements.map((element) => element)}
                      {unRatedElements.map((element) => element)}
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="review-message text-gray-400">
                      <span className="text-indigo-500">“</span>
                      {review.message}
                      <span className="text-indigo-500">”</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Reviews;
