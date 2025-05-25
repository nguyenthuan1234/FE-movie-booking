import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner from '../assets/banner_web1.jpg';

export default function Banner() {
    return (
        <div className=" relative w-full bg-[#0B1725] text-white overflow-hidden">
            {/* Arrow Buttons */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full">
                <ChevronLeft size={32} />
            </button>

            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full">
                <ChevronRight size={32} />
            </button>

            {/* Image container */}
            <div className="w-full flex justify-center items-center">
                {/* User will insert their image here */}
                <img
                    src={banner} // Replace with your image path
                    alt="Cinestar Banner"
                    className="w-full max-h-[400px] object-cover"
                />
            </div>
        </div>
    );
}
