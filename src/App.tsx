
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ArticleDetail from "./pages/ArticleDetail";
import LegalMentions from "./pages/LegalMentions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow pt-24">
                <Routes>
                  {/* Redirect root to default language */}
                  <Route path="/" element={<Navigate to="/en" replace />} />
                  
                  {/* English routes */}
                  <Route path="/en" element={<Index />} />
                  <Route path="/en/services" element={<Services />} />
                  <Route path="/en/articles" element={<Articles />} />
                  <Route path="/en/articles/:slug" element={<ArticleDetail />} />
                  <Route path="/en/portfolio" element={<Portfolio />} />
                  <Route path="/en/portfolio/:slug" element={<ProjectDetail />} />
                  <Route path="/en/about" element={<About />} />
                  <Route path="/en/contact" element={<Contact />} />
                  <Route path="/en/mentions-legales" element={<LegalMentions />} />
                  <Route path="/en/politique-de-confidentialite" element={<PrivacyPolicy />} />
                  
                  {/* French routes */}
                  <Route path="/fr" element={<Index />} />
                  <Route path="/fr/services" element={<Services />} />
                  <Route path="/fr/articles" element={<Articles />} />
                  <Route path="/fr/articles/:slug" element={<ArticleDetail />} />
                  <Route path="/fr/portfolio" element={<Portfolio />} />
                  <Route path="/fr/portfolio/:slug" element={<ProjectDetail />} />
                  <Route path="/fr/about" element={<About />} />
                  <Route path="/fr/contact" element={<Contact />} />
                  <Route path="/fr/mentions-legales" element={<LegalMentions />} />
                  <Route path="/fr/politique-de-confidentialite" element={<PrivacyPolicy />} />
                  
                  {/* 404 route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
