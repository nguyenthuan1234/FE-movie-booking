import React from "react";
import { Search, User } from "lucide-react";
import '../types/Header.scss';
import { IoLogoReact } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export default function Header() {
    return (
        <div className="header-container">
            <div className="header-top">
                <div className="header-left">
                    <IoLogoReact className="lg-react" />
                    <button className="btn-yellow">🎟 ĐẶT VÉ NGAY</button>
                    <button className="btn-purple">🍿 ĐẶT BẮP NƯỚC</button>
                </div>

                <div className="header-search">
                    <input type="text" placeholder="Tìm phim, rạp" />
                    <Search size={16} className="search-icon" />
                </div>

                <div className="header-right">
                    <NavLink to={"/login"} className="login">
                        <User size={16} />
                        <span>Đăng nhập</span>
                    </NavLink>
                    <div className="language">
                        <span className="star">★</span>
                        <span className="vn">VN ▾</span>
                    </div>
                </div>
            </div>
            <hr />


            {/* Bottom Nav */}
            <div className="header-bottom">
                <div className="ci-sh">
                    <div className="cinema-dropdown">
                        <div className="cinema-title">📍 Chọn rạp</div>
                        <div className="cinema-menu">
                            <div>Cinestar Quốc Thanh (TP.HCM)</div>
                            <div>Cinestar Satra Quận 6 (TP.HCM)</div>
                            <div>Cinestar Hai Bà Trưng (TP.HCM)</div>
                            <div>Cinestar Sinh Viên (Bình Dương)</div>
                            <div>Cinestar Huế (TP. Huế)</div>
                            <div>Cinestar Đà Lạt (TP. Đà Lạt)</div>
                            <div>Cinestar Lâm Đồng (Đức Trọng)</div>
                            <div>Cinestar Mỹ Tho (Tiền Giang)</div>
                            <div>Cinestar Kiên Giang (Rạch Sỏi)</div>
                        </div>
                    </div>
                    <div className="show-schedule">📍 Lịch chiếu</div>
                </div>


                <div className="cinema-menu-left">
                    <div>Khuyến mãi</div>
                    <div>Thuê sự kiện</div>
                    <div>Tất cả các giải trí</div>
                    <div>Giới thiệu</div>
                </div>
            </div>

        </div>
    );
}