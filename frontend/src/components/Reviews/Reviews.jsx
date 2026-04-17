import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "text-green-500";
    if (rating >= 3) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Testimoinials</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="card m-10 p-5  shadow-lg border h-full">
                <div className="card-body">
                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={review.user_photoURL} alt="user" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.userName}</h3>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`font-bold ${getRatingColor(review.ratings)}`}
                    >
                      {review.ratings}
                    </span>
                    <span className="text-sm text-gray-400">/ 5</span>
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 mt-2 text-sm">{review.review}</p>

                  {/* Parcel */}
                  <p className="mt-3 text-sm">
                    📦 <span className="font-medium">{review.parcel_id}</span>
                  </p>

                  {/* Date */}
                  <div className="text-xs text-gray-400 mt-3">
                    {formatDate(review.date)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
