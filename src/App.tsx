import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { GeneralPage } from './pages/GeneralPage';
import { AboutPage } from './pages/AboutPage';
import { TherapyPage } from './pages/TherapyPage';
import { TherapyFeedbackPage } from './pages/TherapyFeedbackPage';
import { TherapyFamilyPage } from './pages/TherapyFamilyPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourcesInspirationPage } from './pages/ResourcesInspirationPage';
import { ResourcesReadingPage } from './pages/ResourcesReadingPage';
import { ResourcesVideosPage } from './pages/ResourcesVideosPage';
import { ResourcesLinksPage } from './pages/ResourcesLinksPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Mail, MapPin, Heart, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_50%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--secondary)_0%,_transparent_50%)] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold gradient-text text-left">Relatings</h3>
              <p className="text-gray-600 font-medium">with Pippa Solomon • EFT Certified Therapist</p>
            </div>
          </div>

          
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold text-gray-800">076 882 8681</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Mail className="h-5 w-5 text-secondary" />
              <span className="font-semibold text-gray-800">pippa@relating.co.za</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-semibold text-gray-800">Noordhoek, Cape Town</span>
            </div>
          </div>
          
          
          
          <div className="space-y-4 text-gray-600">
            <p className="text-sm">
              © 2025 relating • All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 my-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <div className="w-24 h-px bg-gradient-to-r from-primary via-secondary to-primary"></div>
            <Sparkles className="h-4 w-4 text-secondary" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<GeneralPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/therapy" element={<TherapyPage />} />
            <Route path="/therapy/feedback" element={<TherapyFeedbackPage />} />
            <Route path="/therapy/family" element={<TherapyFamilyPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/inspiration" element={<ResourcesInspirationPage />} />
            <Route path="/resources/reading" element={<ResourcesReadingPage />} />
            <Route path="/resources/videos" element={<ResourcesVideosPage />} />
            <Route path="/resources/links" element={<ResourcesLinksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}