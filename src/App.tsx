import Header from './components/Header.jsx';
import CinestarBanner from './components/CinestarBanner.jsx';
import QuickBookingForm from './components/QuickBookingForm.jsx';
import MovieSlider from './components/MovieSlider.jsx';
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      <Header />

      {/* Các phần dưới không cần hiện ở trang login */}
      {!isLoginPage && (
        <>
          <CinestarBanner />
          <QuickBookingForm />
          <MovieSlider />
        </>
      )}
      <Outlet />

    </div>
  );
};

export default App;
