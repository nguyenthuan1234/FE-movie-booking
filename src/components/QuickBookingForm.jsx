import React, { useState } from 'react';
import '../types/QuickBookingForm.scss';

const QuickBookingForm = () => {
    const [selectedCinema, setSelectedCinema] = useState("");
    const [selectedMovie, setSelectedMovie] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const cinemas = [
        "Cinestar Quốc Thanh (TP.HCM)",
        "Cinestar Satra Quận 6 (TP.HCM)",
        "Cinestar Hai Bà Trưng (TP.HCM)",
        "Cinestar Sinh Viên (Bình Dương)",
        "Cinestar Huế (TP. Huế)",
        "Cinestar Đà Lạt (TP. Đà Lạt)",
        "Cinestar Lâm Đồng (Đức Trọng)",
        "Cinestar Mỹ Tho (Tiền Giang)"
    ];

    const moviesByCinema = {
        "Cinestar Quốc Thanh (TP.HCM)": [
            "MƯỢN HỒN ĐOẠT XÁC (T18)",
            "NHIỆM VỤ: BẤT KHẢ THI - NGHIỆP BÁO CUỐI CÙNG (T16)",
            "YADANG: BA MẶT LẬT KÈO (T18)",
            "THÁM TỬ KIỆN: KỲ ÁN KHÔNG ĐẦU (T16)",
            "UNTIL DAWN: BÍ MẬT KINH HOÀNG (T18)",
            "PHIM ĐIỆN ẢNH DORAEMON (P) LT: NOBITA VÀ CUỘC PHIÊU LƯU VÀO THẾ GIỚI TRONG TRANH (P) LT",
            "DƯỚI ĐÁY HỒ (T18)",
            "TỘI ĐỒ (T18)"
        ],
        "Cinestar Satra Quận 6 (TP.HCM)": [
            "GĂNG TƠ TÁI XUẤT (T18)",
            "NHÀ BÚP BÊ MA ÁM (T18)",
            "BÍ MẬT SAU CÁNH CỬA (T16)",
            "KẺ SĂN MỒI ĐÊM (T18)",
            "NHÀ CÓ KHÁCH (T13)",
            "DORAEMON: PHIÊU LƯU VÀO MIỀN KÝ ỨC (P) LT"
        ],
        "Cinestar Hai Bà Trưng (TP.HCM)": [
            "MA TRẬN: HỒI SINH (T18)",
            "CHIẾN BINH BẤT TỬ (T16)",
            "TRUY TÌM KÝ ỨC (T18)",
            "DORAEMON: BÍ ẨN TRÊN SA MẠC (P) LT"
        ],
        "Cinestar Sinh Viên (Bình Dương)": [
            "PHÒNG KHÁM MA (T18)",
            "THÁM HIỂM KHÔNG GIAN (T13)",
            "NGÔI LÀNG BÍ ẨN (T18)",
            "VƯƠNG QUỐC KỲ DIỆU (P) LT"
        ],
        "Cinestar Huế (TP. Huế)": [
            "LỜI NGUYỀN HỒ LY (T18)",
            "SÁT THỦ VÔ HÌNH (T16)",
            "KHÚC CA BÓNG TỐI (T18)",
            "DORAEMON: VÙNG ĐẤT KỲ DIỆU (P) LT"
        ],
        "Cinestar Đà Lạt (TP. Đà Lạt)": [
            "BÓNG MA ĐÊM TRĂNG (T18)",
            "CUỘC GỌI CUỐI CÙNG (T16)",
            "MẬT VỤ HẮC ÁM (T18)",
            "DORAEMON: HÀNH TINH ROBOT (P) LT"
        ],
        "Cinestar Lâm Đồng (Đức Trọng)": [
            "KỲ NGHỈ KINH HOÀNG (T18)",
            "TRUYỀN THUYẾT RỒNG LINH (T16)",
            "NGƯỜI QUAN SÁT (T18)",
            "DORAEMON: CHUYẾN PHIÊU LƯU DƯỚI BIỂN (P) LT"
        ],
        "Cinestar Mỹ Tho (Tiền Giang)": [
            "THÁP MA (T18)",
            "KẺ THỪA KẾ BÓNG TỐI (T16)",
            "NHẬT KÝ BÍ ẨN (T18)",
            "DORAEMON: THẾ GIỚI TRONG GƯƠNG (P) LT"
        ]
    };

    const showtimes = {
        "2025-06-01": ["10:00", "13:30", "15:00"],
        "2025-06-02": ["09:30", "12:00", "18:00"],
        "2025-06-03": ["11:00", "14:00", "19:00"]
    };

    const handleCinemaChange = (e) => {
        setSelectedCinema(e.target.value);
        setSelectedMovie("");
        setSelectedDate("");
    };

    const handleMovieChange = (e) => {
        setSelectedMovie(e.target.value);
        setSelectedDate("");
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div>
            <div className="quick-booking">
                <h2 className="title">ĐẶT VÉ NHANH</h2>

                <select className="dropdown" onChange={handleCinemaChange} defaultValue="">
                    <option value="" disabled>1. Chọn Rạp</option>
                    {cinemas.map((cinema, idx) => (
                        <option key={idx} value={cinema}>{cinema}</option>
                    ))}
                </select>

                <select className="dropdown" onChange={handleMovieChange} value={selectedMovie} disabled={!selectedCinema}>
                    <option value="" disabled>
                        {selectedCinema ? "2. Chọn Phim" : "Chọn rạp trước"}
                    </option>
                    {selectedCinema && moviesByCinema[selectedCinema]?.map((movie, idx) => (
                        <option key={idx} value={movie}>{movie}</option>
                    ))}
                </select>

                <select className="dropdown" onChange={handleDateChange} value={selectedDate} disabled={!selectedMovie}>
                    <option value="" disabled>3. Chọn Ngày</option>
                    {Object.keys(showtimes).map((date, idx) => (
                        <option key={idx} value={date}>{date}</option>
                    ))}
                </select>

                <select className="dropdown" disabled={!selectedDate}>
                    <option value="" disabled>4. Chọn Suất</option>
                    {selectedDate && showtimes[selectedDate].map((time, idx) => (
                        <option key={idx} value={time}>{time}</option>
                    ))}
                </select>

                <button className="book-button">ĐẶT NGAY</button>
            </div>
            <div class="now-showing">
                <h1>PHIM ĐANG CHIẾU</h1>
            </div>

        </div>
    );
};

export default QuickBookingForm;
