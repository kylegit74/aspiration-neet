import './App.css';


import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { lazy, Suspense, useEffect } from 'react';
import AdminRoute from './components/AdminPanel/Layouts/AdminRoute';
import Login from './components/Login/Login';

import SkeletonLoader from './components/Loader';
import ScrollToTop from './layouts/ScrollTop';
import VideoContextProvider from './components/ContextApi/HomePageVideoContext';
import FloatingContactButton from './components/FloatingContactButton';
import Notices from './pages/Download';
import SpecificNoticePage from './pages/PageForSpecificNotice';
import SearchPage from './pages/SearchPage';
import AllNoticePage from './pages/AllNoticePage';
import CoursesPage from './pages/CoursesPage';
import ContextApi from './components/ContextApi/CourseContext';
import CourseDetailsPage from './pages/CourseDetailsPage';
import ScholarshipPage from './pages/ScholarshipPage';
import ApplyForm from './pages/ApplyForm';
import SideFixedButtons from './layouts/TwoFixedButtons';

const Home=lazy(()=>import('../src/pages/Home'));
const AboutUs=lazy(()=>import('../src/pages/About'));
const ContactPage=lazy(()=>import('../src/pages/Contact'));
const WhyChooseUs=lazy(()=>import('../src/pages/WhyChooseUs'));

function App() {
  
 
  return (
   <>
    <VideoContextProvider>
    <BrowserRouter>
     
        <Suspense fallback={<SkeletonLoader/>}>
        <ScrollToTop/>
        <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/why-choose-us' element={<WhyChooseUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/download" element={<Notices/>}/>
        
        <Route path="/admin/*" element={<AdminRoute />} />
        <Route path='/notice/:slug' element={<SpecificNoticePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path='/notices' element={<AllNoticePage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/courses/:slug' element={<CourseDetailsPage/>}/>
        <Route path='/scholarship' element={<ScholarshipPage/>}/>
        <Route path='/course/apply/:slug' element={<ApplyForm/>}/>
      </Routes>
      <FloatingContactButton/>
      <SideFixedButtons/>
      </Suspense>
    </BrowserRouter>
    </VideoContextProvider>
    </>
  
  );
}

export default App;
