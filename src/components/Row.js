import "./Row.css";
import React, {useState, useEffect} from "react";
import MovieModal from "./MovieModal";
import axios from "../api/axios";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

    
function Row({title, id, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        fetchMovieData();

    }, [fetchUrl]);

    

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
    };

    const BASE_URL = "https://image.tmdb.org/t/p/original/"

    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    const [movieSelected, setMovieSelected] = useState({});
    return (
        <section className="row">
            <h2>{title}</h2>
            {/* 슬라이더 */}
            <div className="slider">
            <Swiper
        // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
                {/* <div className="slider__arrow-left">
                    <span className="arrow">
                        {"<"}
                    </span>
                </div> */}
                
                {/* 영화 여러 개를 key 값을 이용해 반복문 돌리기 */}
                <div id={id} className="row__posters">                   
                    {movies.map((movie)=> (
                        <SwiperSlide>
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
                            loading="lazy"
                            alt={movie.name}
                            onClick={()=> handleClick(movie)}
                        />
                        </SwiperSlide>
                    ))}    
                </div>
                {/* <div className="slider__arrow-right">
                    <span className="arrow">
                        {">"}
                    </span>
                </div> */}
            </Swiper>
            </div>
            {/* 모달 넣기 */}
            {modalOpen && (
                <MovieModal
                    {...movieSelected}
                    setModalOpen={setModalOpen}
                />
            )}

        </section>
        
    )
}

export default Row;