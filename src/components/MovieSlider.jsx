import React, { useState } from "react";
import '../types/MovieSlider.scss';

import image1 from '../assets/buon-than-ban-thanh.webp';
import image2 from '../assets/ma-moc-hong.webp';
import image3 from '../assets/MI8_Poster_470x700.webp';
import image4 from '../assets/muon-hon-doat-xac.webp';
import image5 from '../assets/nam-muoi-poster.webp';
import image6 from '../assets/yadang-ba-mat-lat-keo.webp';
import image7 from '../assets/thunderbolts-poster.webp';
import image8 from '../assets/de-men-poster.webp';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const movies = [
    { title: "BUỒN THẦN BÁN THÁNH (T16)", poster: image1, releaseDate: "23.05.2025", trailerLink: "#", age: "T16", format: "2D" },
    { title: "MA MÓC HỒNG (T16)", poster: image2, releaseDate: "23.05.2025", trailerLink: "#", age: "T16", format: "2D" },
    { title: "MƯỢN HỒN ĐOẠT XÁC (T18)", poster: image3, releaseDate: "30.05.2025", trailerLink: "#", age: "T18", format: "2D" },
    { title: "NHIỆM VỤ: BẤT KHẢ THI", poster: image4, releaseDate: "TBA", trailerLink: "#", age: "T16", format: "2D" },
    { title: "PHIM MỚI 5", poster: image5, releaseDate: "TBA", trailerLink: "#", age: "T13", format: "2D" },
    { title: "PHIM MỚI 6", poster: image6, releaseDate: "TBA", trailerLink: "#", age: "T18", format: "2D" },
    { title: "PHIM MỚI 7", poster: image7, releaseDate: "TBA", trailerLink: "#", age: "T13", format: "2D" },
    { title: "PHIM MỚI 8", poster: image8, releaseDate: "TBA", trailerLink: "#", age: "T18", format: "2D" }
];

const MovieSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 4;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - itemsPerPage + movies.length) % movies.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + itemsPerPage) % movies.length);
    };

    const totalDots = Math.ceil(movies.length / itemsPerPage);
    const currentDot = Math.floor(activeIndex / itemsPerPage);

    // Tạo danh sách 4 movie hiện tại
    const visibleMovies = movies.slice(activeIndex, activeIndex + itemsPerPage);
    // Nếu đến cuối mảng và thiếu, lấy từ đầu mảng để đủ 4 item
    if (visibleMovies.length < itemsPerPage) {
        visibleMovies.push(...movies.slice(0, itemsPerPage - visibleMovies.length));
    }

    return (
        <div className="movie-slider">
            <div className="movie-list">
                {visibleMovies.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <div className="poster">
                            <img src={movie.poster} alt={movie.title} />
                            <div className="badge">
                                <span className="format">{movie.format}</span>
                                <span className="age">{movie.age}</span>
                            </div>
                        </div>

                        <div className="movie-content">
                            <h4>{movie.title}</h4>
                        </div>

                        <div className="buttons">
                            <a href={movie.trailerLink} className="trailer-btn">
                                <i className="fa fa-play-circle"></i> Xem Trailer
                            </a>
                            <button className="book-btn">Đặt Vé</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-nav">
                <button onClick={handlePrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className="dots">
                    {Array.from({ length: totalDots }).map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentDot ? "active" : ""}`}
                            onClick={() => setActiveIndex(index * itemsPerPage)}
                        />
                    ))}
                </div>


                <button onClick={handleNext}>
                    <ChevronRight size={24} />
                </button>
            </div>

            <button className="load-more">Xem Thêm</button>
        </div>
    );
};

export default MovieSlider;
