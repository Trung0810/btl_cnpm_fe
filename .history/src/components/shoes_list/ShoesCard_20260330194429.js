import React from "react";

const ShoesCard = () => {
  return (
    <div className="movie-list">
      <h3 className="movie-list-title">{title}</h3>
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "290px" }}>
              <Movie
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
                release_date={item.release_date}
                vote_average={item.vote_average}
              ></Movie>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ShoesCard;
