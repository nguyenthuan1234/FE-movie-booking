
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
    return (
        <header className="bg-[#0B1121] text-white px-6 py-3">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img src="/logo.png" alt="Cinestar Logo" className="h-10" />
                </div>

                {/* Booking buttons */}
                <div className="flex gap-2">
                    <button className="bg-yellow-400 text-black font-bold hover:bg-yellow-300 px-4 py-2 rounded">
                        ĐẶT VÉ NGAY
                    </button>
                    <button className="bg-purple-600 text-white font-bold hover:bg-purple-500 px-4 py-2 rounded">
                        ĐẶT BẮP NƯỚC
                    </button>
                </div>

                {/* Search bar */}
                <div className="relative w-1/3">
                    <input
                        type="text"
                        placeholder="Tìm phim, rạp"
                        className="rounded-full pl-4 pr-10 py-2 bg-white text-black w-full"
                    />
                    <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
                </div>

                {/* Login and language */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <FaUserCircle />
                        <span>Đăng nhập</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>🇻🇳</span>
                        <span>VN</span>
                    </div>
                </div>
            </div>

            {/* Secondary navigation */}
            <nav className="mt-3 flex gap-6 text-sm">
                <div className="flex items-center gap-1">
                    <FaMapMarkerAlt />
                    <span>Chọn rạp</span>
                </div>
                <span>Lịch chiếu</span>
                <span>Khuyến mãi</span>
                <span>Thuê sự kiện</span>
                <span>Tất cả các giải trí</span>
                <span>Giới thiệu</span>
            </nav>
        </header>
    );
}
