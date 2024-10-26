// import { Suspense, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import AppNavbar from "./components/AppNavbar/AppNavbar";
// import Home from "./pages/Home/Index";
// import Classes from "./pages/Classes/Index";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./utility_classes.css";
// import "./App.css";
// import "./components/GlobalStyle";
// import VideoDetails from "./pages/Classes/VideoDetails/VideoDetails";
// import Footer from "./components/Footer/Footer";
// import ScrollToTopButton from "./components/common/Button/ScrollToTopButton";
// import { scrollToSection, scrollToTop } from "./utils/helper";
// import Modal from "styled-react-modal";
// import TagManager from "react-gtm-module";
// import AdminPortal from "./AdminPortal/Index";

// const tagManagerArgs = { gtmId: "GTM-ND5H33G7" };
// TagManager.initialize(tagManagerArgs);

// function App() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     scrollToTop();
//   }, [pathname]);

//   return (
//     <div className="home_page">
//       <Suspense fallback={<div>loading....</div>}>
//         <AppNavbar scrollToSection={scrollToSection} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/videos" element={<Classes />} />
//           <Route path="/videos/:videoId" element={<VideoDetails />} />
//           {/* <Route path="/admin" element={<AdminPortal />} /> */}
//           <Route path="*" element={<div>Page not found.</div>} />
//         </Routes>
//         <Footer />
//       </Suspense>
//       <ScrollToTopButton />
//       <Modal />
//     </div>
//   );
// }

// export default App;
import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Home from "./pages/Home/Index";
import Classes from "./pages/Classes/Index";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utility_classes.css";
import "./App.css";
import "./components/GlobalStyle";
import VideoDetails from "./pages/Classes/VideoDetails/VideoDetails";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/common/Button/ScrollToTopButton";
import { scrollToSection, scrollToTop } from "./utils/helper";
import Modal from "styled-react-modal";
import TagManager from "react-gtm-module";
import AdminPortal from "./AdminPortal/Index";
import Login from "./AdminPortal/AuthPages/Login/Login";
import SignUp from "./AdminPortal/AuthPages/SignUp/SignUp";
import ForgotPassword from "./AdminPortal/AuthPages/ForgotPassword/ForgotPassword";
import UploadVideo from "./AdminPortal/VideosPages/UploadVideo/UploadVideo";
import VideoList from "./AdminPortal/VideosPages/VideoList/VideoList";
import AddCategory from "./AdminPortal/AddCategories/AddCategory/AddCategory";
import EditVideo from "./AdminPortal/VideosPages/EditVideo/editVideo";
import CategoryList from "./AdminPortal/AddCategories/CategoryListPage/CategoryList";


const tagManagerArgs = { gtmId: "GTM-ND5H33G7" };
TagManager.initialize(tagManagerArgs);

const App = () => {
  const { pathname } = useLocation();
  const [categories, setCategories] = useState([
    { name: "Technology", subcategories: ["AI", "Web Development", "Cybersecurity"] },
    { name: "Health", subcategories: ["Fitness", "Nutrition", "Mental Health"] },
  ]);


 

   // Add new category dynamically from AddCategory component
   const handleAddCategory = (newCategory) => {
    setCategories(prevCategories => [...prevCategories, newCategory]);
  };

//   const token =   localStorage.getItem('token');
// const navigate=useNavigate()
//   useEffect(() => { 
//     console.log("token is ",token)
// if(token){
//   return navigate("/")
// }
// else if(!token){
// return navigate("login")
// }
//   }, [token])


  
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // List of paths where Navbar and Footer shouldn't be displayed
  const noNavFooterRoutes = ["/admin", "/login", "/forgot-password", "/signup", "/uploadvideo", "/videolist", "/addcategory", "/categorylist"];

  const shouldShowNavAndFooter = !noNavFooterRoutes.includes(pathname);

  return (
    <div className="home_page">
      <Suspense fallback={<div>loading....</div>}>
        {/* Conditionally render Navbar */}
        {shouldShowNavAndFooter && (
          <AppNavbar scrollToSection={scrollToSection} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Classes />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/uploadvideo" element={<UploadVideo  categories={categories}/>}
           />
             <Route path="/editVideo/:Id" element={<EditVideo />} />
          <Route path="/videolist" element={<VideoList />} />
          <Route path="/categorylist" element={<CategoryList />} />
          <Route path="/addcategory" element={<AddCategory onAddCategory={handleAddCategory} />} />

          <Route path="*" element={<div>Page not found.</div>} />
        </Routes>
        {/* Conditionally render Footer */}
        {shouldShowNavAndFooter && <Footer />}
      </Suspense>
      <ScrollToTopButton />
      <Modal />
    </div>
  );
}

export default App;
