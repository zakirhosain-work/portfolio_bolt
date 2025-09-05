import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './contexts/ContentContext';
import AdminApp from './components/admin/AdminApp';
import BlogDashboard from './components/admin/BlogDashboard';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BlogPreview from './components/BlogPreview';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MainSite = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Services />
    <Portfolio />
    <BlogPreview />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <ContentProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/admin" element={<AdminApp />} />
          </Routes>
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;