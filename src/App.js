import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader";

const HomePage = React.lazy(() => import("./components/HomePage"));
const EmailSubscribe = React.lazy(() => import("./components/EmailSubscribe"));
const PriceGrid = React.lazy(() => import("./components/PriceGrid"));
const ProductModal = React.lazy(() => import("./components/ProductModal"));
const ImageGallery = React.lazy(() => import("./components/ImageGallery"));
const LoginModal = React.lazy(() => import("./components/LoginModal"));
const ClipboardWebsite = React.lazy(() =>
  import("./components/Clipboard/Index")
);
const NoMatch = React.lazy(() => import("./components/NoMatch"));

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={<PageLoader />}>
                <HomePage />
              </React.Suspense>
            }
          />
          <Route
            path="email-subscribe"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <EmailSubscribe />
              </React.Suspense>
            }
          />
          <Route
            path="price-grid"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <PriceGrid />
              </React.Suspense>
            }
          />
          <Route
            path="product-modal"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <ProductModal />
              </React.Suspense>
            }
          />
          <Route
            path="image-gallery"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <ImageGallery />
              </React.Suspense>
            }
          />
          <Route
            path="login-modal"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <LoginModal />
              </React.Suspense>
            }
          />
          <Route
            path="clipboard-website"
            element={
              <React.Suspense fallback={<PageLoader />}>
                <ClipboardWebsite />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
