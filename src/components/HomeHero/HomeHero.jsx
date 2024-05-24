import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import heroSlideImg from "../../assets/heroImg.webp";
import Blog from "../Blog/Blog";
import axios from "axios";

const HomeHero = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const baseUrl = "https://stg.lb908.com/api/";

  //   axios
  //     .get(`${baseUrl}article-categories?populate[articles][filters][is_feature][$eq]=true[populate]=cover_image`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  useEffect(() => {
    const baseUrl = "https://stg.lb908.com/api/";

    axios
      .get(
        `${baseUrl}articles?filters[is_feature][$eq]=true&filters[is_rejected][$ne]=true&populate=cover_image&populate=article_categories`
      )
      .then((response) => {
        // Filter items where articles.data is present
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(data, "articles category with articles data");

  return (
    <>
      <div className="bg-white">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white text-black flex justify-start items-center w-[100%] h-[80vh] flex-col md:flex-row">
                <div className="md:py-6 md:px-12 md:w-[60%] p-4">
                  <h2 className="bg-black text-white uppercase w-fit py-1 px-2 font-bold text-md my-6">
                    Featured
                  </h2>
                  <Link>
                    <h1 className="text-2xl md:text-5xl font-bold mb-6">
                      {item.attributes.title}
                    </h1>
                  </Link>
                  <p className="text-base text-neutral-500 h-18 line-clamp-3">
                    {item.attributes.content_description}
                  </p>
                </div>
                <div className="h-[710px]">
                  {item.attributes.cover_image &&
                    item.attributes.cover_image.data &&
                    item.attributes.cover_image.data.map((image) => (
                      <img
                        key={image.id}
                        src={`https://stg.lb908.com/${image.attributes.url}`}
                        className="h-full"
                        alt={item.attributes.title}
                      />
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row my-10 h-[fit-content] justify-between ">
        <div className="h-[250px] md:w-[30%] md:h-[350px]">
          <Blog />
        </div>

        <div className="h-[250px] md:w-[30%] md:h-[350px]">
          <Blog />
        </div>

        <div className="h-[250px] md:w-[30%] md:h-[350px]">
          <Blog />
        </div>
      </div>
    </>
  );
};

export default HomeHero;
